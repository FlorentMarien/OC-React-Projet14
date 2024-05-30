import './../styles/Input.css';
import './../styles/DatatableCustom.css';
import { useState,useEffect } from 'react';
import ArrowUp from './../assets/icon/sort-up-svgrepo-com.svg';
import ArrowDown from './../assets/icon/sort-down-svgrepo-com.svg';
import DropdownCustom from './DropdownCustom';

export function ColumnCustom(props) {
    return(
        <td>{ props.name }</td>
    );
}

function CelCustom(props){
    let view;
    if(props.dataType === "string" ) view = (<div className='table-td'>{props.value}</div>);
    if(props.dataType === "date" ) view = (<div className='table-td'>{new Date(props.value).toLocaleDateString("fr-Fr")}</div>);
    return ( view )
}
function HeaderCustom(props, state){
    
    return (
        <div className='table-header'>
        {
            props.searchGlobal === true &&
            <div className='table-thead'>
                <input type='text' onChange={(e)=>{ 
                    state.statepaginator[1]({...state.statepaginator[0],viewPage:0});
                    state.Search[1]({ ...state.Search[0], ["searchGlobal"]: e.target.value})
                }} placeholder='GlobalSearch ?'/>
            </div>
        }
        <div className='table-thead'>
            {
                props.children.map( x => {
                return ( 
                    <div className='table-td'>
                        <p>{x.props.field}</p>
                        {
                            x.props.sortable === true &&
                            <div>
                                <img src={ArrowUp} onClick={()=>FilterColumnAscend({field: x.props.field, dataType: x.props.dataType === undefined ? "string" : x.props.dataType, state:state})} name="Filter list ascending"/>
                                <img src={ArrowDown} onClick={()=>FilterColumnDesc({field: x.props.field, dataType: x.props.dataType === undefined ? "string" : x.props.dataType, state:state,})} name="Filter list descending"/>
                            </div>
                        }
                        {
                            
                            x.props.search === true &&
                                <>
                                <input type="text" onChange={(e)=>{ state.statepaginator[1]({...state.statepaginator[0],viewPage:0});state.Search[1](  { ...state.Search[0], [x.props.field]: e.target.value}  ) }} placeholder='Search ?'/>
                                </>
                        }
                    </div> 
                )})
            }
        </div>
        </div>
    );
}
export function DatatableCustom(props) {
    let [listUser,setlistUser] = useState(props.data);
    let [Search,SetSearch] = useState({});
    let [StatePaginator,SetStatePaginator] = useState({viewPage: 0,arrayPaginator: props.paginator === undefined ? [10] : props.paginator,focusPaginator: props.paginator === undefined ? 10 : props.paginator[0]});
    
    let returnlistUser = listUser.map(dataelement => {
            let elementSearch = 0;
            if(Search["searchGlobal"] !== undefined)
            {
                let incr = 0;
                Object.keys(dataelement).forEach((e)=>{ 
                    if(typeof dataelement[e] === 'string') if(dataelement[e].includes(Search["searchGlobal"])) incr +=1 ;
                    if(typeof dataelement[e] === 'object') {
                        if(dataelement[e].toLocaleDateString("fr-Fr").includes(Search["searchGlobal"])) incr +=1 ;
                    }
                });
                if(incr > 0) elementSearch += 1;
            }

            Object.keys(Search).forEach((e)=>{ 
                if(e !== 'searchGlobal'){
                    if(typeof dataelement[e] === 'string') if(dataelement[e].includes(Search[e])) elementSearch +=1; ;
                    if(typeof dataelement[e] === 'object') {
                        if(dataelement[e].toLocaleDateString("fr-Fr").includes(Search["searchGlobal"])) elementSearch +=1 ;
                    }
                    
                }
            });
            if(Object.values(Search).length === 0 || Object.values(Search).length <= elementSearch){
                let line= (
                    <>
                        {props.children.map( x => { 
                            return CelCustom({ columName:x.props.field,value:dataelement[x.props.field], dataType:x.props.dataType === undefined ? "string" : x.props.dataType})
                            })
                        }
                    </>
                );
                if(line.props.children !== undefined ) line = (<div className="table-tr">{line}</div>);
                return line;
            }
    });
    let returntampon = [];
    returnlistUser.forEach((e)=>{
        if(e !== undefined) returntampon.push(e);
    })
    
    returnlistUser = returntampon;
    let iteration = 0;
    let datatable = (
        <>
        <div id={props.id !== undefined && props.id} className='datatable'> 
            {HeaderCustom(props, {listUser:[listUser,setlistUser],Search:[Search,SetSearch],statepaginator:[StatePaginator,SetStatePaginator]})}
            <div className='table-data'>
                {returnlistUser.map((e)=>{ if((iteration < (StatePaginator.focusPaginator*(StatePaginator.viewPage+1))) && (iteration >= (StatePaginator.focusPaginator*StatePaginator.viewPage))){ 
                    iteration++;
                    return e;
                    } else{ iteration++; }
                
                })}
                {returnlistUser.length === 0 && <p className='msg-nocontent'>Aucun élément ne correspond à votre recherche</p>}
            </div>
            {FooterCustom(props, [StatePaginator,SetStatePaginator], returnlistUser.length)}
        </div>
        
        </>
     );
    return (
        <>
            {datatable}
        </>
    );
}
function FooterCustom(props, statepaginator, nbrelementinview){
    let nbrpage = Math.floor(nbrelementinview / statepaginator[0].focusPaginator);
    //let returnnbrpage = <></>;
    let returnnbrpage = [];
    let returnnbrpagination = [];
    for(let x = 0; x <= nbrpage; x++){
        returnnbrpage.push({label:x,value:x});
    }
    for(let x = 0; x<statepaginator[0].arrayPaginator.length; x++){
        returnnbrpagination.push({label:statepaginator[0].arrayPaginator[x],value:statepaginator[0].arrayPaginator[x]});
    }
    return(
        <div className='table-footer table-tr'>
            <div className='table-td'>
                {
                    <DropdownCustom data={{list:returnnbrpage,selectedIndex:statepaginator[0].viewPage}} onChange={(e) => { statepaginator[1]({...statepaginator[0],viewPage: parseInt(e.value)}) }}/>
                }
            </div>
            <div className='table-td'>
                {
                    <DropdownCustom data={{list:returnnbrpagination,selectedIndex:statepaginator[0].arrayPaginator.indexOf(statepaginator[0].focusPaginator)}} onChange={(e) => { statepaginator[1]({...statepaginator[0],focusPaginator: parseInt(e.value),viewPage:0}) }}/>
                }
            </div>
        </div>
    )
}
function FilterColumnDesc(obj){
    let defaultState = {...obj.state.listUser};
    let listUser = [...defaultState[0]];
    let field = obj.field;
    defaultState[1]([...listUser.sort((a,b) => a[field] < b[field])]);
}
function FilterColumnAscend(obj){
    let defaultState = {...obj.state.listUser};
    let listUser = [...defaultState[0]];
    let field = obj.field;
    defaultState[1]([...listUser.sort((a,b) => a[field] > b[field])]);
}

