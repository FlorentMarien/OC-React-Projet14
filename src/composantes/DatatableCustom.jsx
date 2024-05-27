import './../styles/Input.css';
import './../styles/DatatableCustom.css';
import { useState } from 'react';
import ArrowUp from './../assets/icon/sort-up-svgrepo-com.svg';
import ArrowDown from './../assets/icon/sort-down-svgrepo-com.svg';
import { departments } from '../assets/data/data';
import { invalid } from 'moment';

export function ColumnCustom(props) {
    return(
        <td>{ props.name }</td>
    );
}
function CelCustom(props){
    let view;
    if(props.dataType === "string" ) view = (<td>{props.value}</td>);
    if(props.dataType === "date" ) view = (<td>{new Date(props.value).toLocaleDateString("fr-Fr")}</td>);
    return (

        <td>{ view }</td>
    )
}
function HeaderCustom(props, state){
    return (
        <thead>
            {
                props.children.map( x => { return ( 
                    <td>
                        <div>{x.props.field}</div>
                        {
                        x.props.sortable === true &&
                        <>
                            <img src={ArrowUp} onClick={()=>FilterColumnAscend({field: x.props.field, dataType: x.props.dataType === undefined ? "string" : x.props.dataType, state:state})} name="Filter list ascending"/>
                            <img src={ArrowDown} onClick={()=>FilterColumnDesc({field: x.props.field, dataType: x.props.dataType === undefined ? "string" : x.props.dataType, state:state,})} name="Filter list descending"/>
                        </>
                        }
                    </td> 
                )})
            }
        </thead>
    );
}
export function DatatableCustom(props) {
    let [listUser,setlistUser] = useState(props.data);
    let datatable = (
        <table id={props.id !== undefined && props.id} className='datatable'> 
        {HeaderCustom(props, [listUser,setlistUser])}
        {
            listUser.map(dataelement => {
                let line= (
                    <tr>
                        {props.children.map( x => { return CelCustom({ columName:x.props.field,value:dataelement[x.props.field], dataType:x.props.dataType === undefined ? "string" : x.props.dataType})})}
                    </tr>
                );
                return line;
            })
        }
        </table>
     );
    return (
        <>
            {datatable}
        </>
    );
}
function Filter(text1,text2,dataType,order){
    let verif = 1;
    if(dataType === "string"){
        let string1 = new String(text1);
        let string2 = new String(text2);
        if(string1 !== string2){
            if(string1.length === 0) {
                verif=2;
                if(string1.length === 0 && string2.length === 0) verif=0;
            }
            else{
                if(string2.length === 0) verif=0;
                else{
                    for(let x=0;x < string1.length;x++){
                        if(string1.charCodeAt(x) < string2.charCodeAt(x)) verif=2;
                    }
                }
            }
        }else{ verif = 0;}
    }
    if(dataType === "date"){
        let date1 = new Date(text1);
        let date2 = new Date(text2);
        
        if(!isNaN(date1.getTime()) === true && !isNaN(date2.getTime()) === true ){
            
            if(date1.getTime() === date2.getTime()) verif = 0;
            if(date1.getTime() > date2.getTime()) verif = 1;
            if(date1.getTime() < date2.getTime()) verif = 2;
        }else{
            if(isNaN(date1.getTime()) === true){
                if(order === "desc" && !isNaN(date2.getTime()) === true) verif = 2;
                else verif=0;

                if(order === "asc" && !isNaN(date2.getTime()) === true) verif = 1;
            }else verif = 0;
        }
        
    }
    return verif;
    // 0 = / 1 < / 2 >
}
//inverser
function FilterColumnDesc(obj){
    let defaultState = {...obj.state};
    let listUser = [...defaultState[0]];
    let field = obj.field;
    let dataType = obj.dataType;
    let x=0;
    while(x < listUser.length-1){
       if(Filter(listUser[x][field] , listUser[x+1][field],dataType,"desc") === 2){
            let tampon = listUser[x];
            listUser[x] = listUser[x+1];
            listUser[x+1] = tampon;
            x=0;  
       }else{
       x++;
       }
    }
    defaultState[1]([...listUser]);
}
function FilterColumnAscend(obj){
    let defaultState = {...obj.state};
    let listUser = [...defaultState[0]];
    let field = obj.field;
    let dataType = obj.dataType;
    let x=0;
    while(x < listUser.length-1){
       if(Filter(listUser[x][field] , listUser[x+1][field],dataType,"asc") === 1){
            let tampon = listUser[x+1];
            listUser[x+1] = listUser[x];
            listUser[x] = tampon;
            x=0;
       }else {
        x++;
       }
    }
    defaultState[1]([...listUser]);
}

