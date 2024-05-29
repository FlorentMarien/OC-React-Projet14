import './../styles/Input.css';
import './../styles/DatatableCustom.css';
import { useState } from 'react';
import ArrowUp from './../assets/icon/sort-up-svgrepo-com.svg';
import ArrowDown from './../assets/icon/sort-down-svgrepo-com.svg';

export function ColumnCustom(props) {
    return(
        <td>{ props.name }</td>
    );
}
function CelCustom(props){
    let view;
    if(props.dataType === "string" ) view = (<div className='table-td'>{props.value}</div>);
    //if(props.dataType === "date" ) view = (<div className='table-td'>{new Date(props.value).toLocaleDateString("fr-Fr")}</div>);
    return (

        <div className='table-td'>{ view }</div>
    )
}
function HeaderCustom(props, state){
    
    return (
        <>
        {
            props.searchGlobal === true &&
            <div className='table-thead'>
                <input type='text' onChange={(e)=>{state.Search[1](  { ...state.Search[0], ["searchGlobal"]: e.target.value}  )}} placeholder='GlobalSearch ?'/>
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
                                <input type="text" onChange={(e)=>{ state.Search[1](  { ...state.Search[0], [x.props.field]: e.target.value}  ) }} placeholder='Search ?'/>
                                </>
                        }
                    </div> 
                )})
            }
        </div>
        </>
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
            {HeaderCustom(props, {listUser:[listUser,setlistUser],Search:[Search,SetSearch]})}
            {returnlistUser.map((e)=>{ if((iteration < (StatePaginator.focusPaginator*(StatePaginator.viewPage+1))) && (iteration >= (StatePaginator.focusPaginator*StatePaginator.viewPage))){ 
                iteration++;
                return e;
                } else{ iteration++; }
            
                })}
            {FooterCustom(props, [StatePaginator,SetStatePaginator])}
        </div>
        {returnlistUser.length === 0 && <p className='msg-nocontent'>Aucun élément ne correspond à votre recherche</p>}
        </>
     );
    return (
        <>
            {datatable}
        </>
    );
}
function FooterCustom(props, statepaginator){
    let nbrpage = Math.ceil(props.data.length / statepaginator[0].focusPaginator);
    let returnnbrpage = <></>;
    for(let x = 0; x<nbrpage; x++){
        returnnbrpage = (
            <>
                {returnnbrpage}
                <a onClick={(e)=>{statepaginator[1]({viewPage: x,arrayPaginator:statepaginator[0].arrayPaginator,focusPaginator:statepaginator[0].focusPaginator})}}>{x}</a>
            </>
        );
    }
    return(
        <div className='table-tr'>
            <div className='table-td'>
                {
                    returnnbrpage
                }
            </div>
            <div className='table-td'>
                {
                    statepaginator[0].arrayPaginator.map( e =>{ return (<a onClick={(evt)=>statepaginator[1]({viewPage: statepaginator[0].viewPage,arrayPaginator:statepaginator[0].arrayPaginator,focusPaginator:e}) }>{e}</a>)})
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

