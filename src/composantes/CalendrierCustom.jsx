import './../styles/CalendrierCustom.css';
import { useState,useEffect } from 'react';
import  DropdownCustom from './DropdownCustom';
import moment, { weekdays } from 'moment';
import arrowleft from './../assets/icon/arrow-left-5-svgrepo-com.svg';
import arrowright from './../assets/icon/right-arrow-svgrepo-com(1).svg';

/*
(props)
    props={
        id: String //id of calendrier
        selected : date() //Date selected input & calendrier
        formatCalendrier: String // "us-US" "fr-FR"
        rangeYear: [Number yearMin,Number rangeyearMax, /*Number yearindex* /]
        linetable: Number // Line of table min 5 max 6 / default:6;
        rangeWeekday: Array //stuck element who is in array [0,1,2,3,4,5]
        //yearindex
        onChange: setstate //Return date selected
    }
    objectformatCalendrier { formatCalendrier: [[Schemas semaine],[Décalage], [Language for date]] }
*/

function CalendrierCustom(props) {
    const [Open,setOpen] = useState(0);
    const [DateCal,setDateCal] = useState(props.selected);
    const [ViewDate,setViewDate] = useState({month:DateCal.getMonth(),year:DateCal.getFullYear(),yearindex:props.rangeYear === undefined ? 0 : props.rangeYear[1] - new Date().getFullYear()});
    const arrayData = ["Janvier","Fevrier","Mars","Avril","Mai","Juin",'Juillet',"Aout","Septembre","Octobre","Novembre","Decembre"];
    let listData = arrayData.map((e)=>{
        return { label:e,  value:e }
    });
    let listYear = [];
    const objectformatCalendrier = {
        'en-US': [["D","L","M","M","J","V","S"],0,'en-US'],
        'fr-FR': [["L","M","M","J","V","S","D"],1,'fr-FR'],
        'TEST': [["J","V","S","D","L","M","M"],4,'fr-FR'],
    }
    const id = props.id !== undefined && props.id;
    const rangeWeekday = props.rangeWeekday === undefined ? [0,6] : props.rangeWeekday;
    const formatCalendrier = (props.formatCalendrier === undefined || objectformatCalendrier[props.formatCalendrier] === undefined) ? "en-US" : props.formatCalendrier;
    const linetable = props.linetable === undefined ? 6 : props.linetable;
    const rangeYearMin = props.rangeYear === undefined ? 1940 : props.rangeYear[0];
    const rangeYearMax = props.rangeYear === undefined ? new Date().getFullYear()+30 : props.rangeYear[1];
    const rangeYear= [rangeYearMin, rangeYearMax];
    let rangeYearX = rangeYear[1]-rangeYear[0];

    for(rangeYearX;rangeYearX>=0;rangeYearX--){
        listYear.push({label:rangeYear[0]+rangeYearX,value:rangeYear[0]+rangeYearX});
    }

    let header;
    for(let x=0;x<=6;x++){
        let indexDay = x+objectformatCalendrier[formatCalendrier][1]-7;
        if(indexDay < 0) indexDay += 7;
        header = (
            <>
            {header}
            <td className={rangeWeekday.includes(indexDay) && "-weekday"}>
                <p>{objectformatCalendrier[formatCalendrier][0][x]}</p>
            </td>
            </>
        )
    }
    header = (
        <thead className='calendrier-semaine'>
            {header}
        </thead>
    );

    useEffect(() => {
        setDateCal(props.selected);
    },[props.onChange]);

    function getTab(){
        const date = new Date(ViewDate.year, ViewDate.month, 1);
        const firstDayOfMonth = date.getDay();
        const lastDayOfMonth = parseInt(moment(new Date(ViewDate.year, ViewDate.month+1, 0)).format("DD"));
        const afterMonth = new Date(ViewDate.year, ViewDate.month+1, 1);
        const beforeMonth = new Date(ViewDate.year, ViewDate.month, 0);
        const nbrdayBeforeMonth = parseInt(moment(beforeMonth).format("DD"));
        if (typeof window !== 'undefined' && Open === 1) {
            window.addEventListener('click', function (e) {
              if(e.target.closest(".full-container-"+props.id) === null) {
                setOpen(0)
            };
            });
        }

        function clickhandle(date){
            if(rangeWeekday.includes(date.getDay())) alert("Weekday");
            else{
                if(props.onChange !== undefined) props.onChange(date);
                else setDateCal(date);
            }
        }

        let endbefore = false;
        let startafter = false;
        let datedebut = objectformatCalendrier[formatCalendrier][1];
        
        let firstDayOfMonthFiltred = firstDayOfMonth - datedebut;
        if(firstDayOfMonthFiltred < 0 ) firstDayOfMonthFiltred = 6;
        
        let minBeforeMonth = nbrdayBeforeMonth-dayBetween(datedebut,date.getDay());
        function dayBetween(dayoftheweek1,dayoftheweek2){
            let res = (dayoftheweek2+7)-dayoftheweek1;
            if(res>=7) res -= 7;
            return res;
        }
        let tab;
        
        let z = minBeforeMonth+1;
        let x = 1;
        let y = 1;
        for(y=1;y <= linetable;y++){
            let cel;
            for(x=0; x<=6 ;x++){
                let data = "";
                
                if( z > nbrdayBeforeMonth  && endbefore === false) { endbefore=true;z=1;};
                if( z > lastDayOfMonth && endbefore === true && startafter === false) { startafter = true;z=1;};
                
                if( endbefore === false ){
                        data = { content:z,class:"calendrier-before-month",date:new Date(beforeMonth.getFullYear(), beforeMonth.getMonth(), z)};
                }else if(endbefore === true && startafter === false){
                    data = {content:z,class:"calendrier-actual-month",date:new Date(ViewDate.year, ViewDate.month, z)};
                }else{
                    
                    data = {content:z,class:"calendrier-after-month",date:new Date(afterMonth.getFullYear(), afterMonth.getMonth(), z)};
                }
                if(rangeWeekday.includes(data.date.getDay())) data.class += " -weekday";
                z++;
               
                if(data.date.toDateString() === DateCal.toDateString()) data.class += " date-active";
                cel = (
                    <>
                        {cel}
                        <td className={data.class} onClick={(e) => clickhandle(data.date) }>{data.content}</td>
                    </>
                );
            }
            tab = (
                <>
                    {tab}
                    <tr>
                        {cel}
                    </tr>
                </>
                );
        
        }
       tab = (
        <div id={id+"-custom"} className='calendrier'>
            <thead className='calendrier-activedate'>
            <p>{DateCal.getFullYear()}</p>
            <p>{DateCal.toLocaleDateString(objectformatCalendrier[formatCalendrier][2],{weekday:'long',day: 'numeric',month: 'long'})}</p>
            </thead>
            <thead>
                <td onClick={(e)=>{
                
                    if ( ViewDate.year === rangeYearMin && ViewDate.month === 0 ){
                    } else {
                    setViewDate(ViewDate.month === 0 ? {month:11,year:ViewDate.year-1,yearindex:ViewDate.yearindex+1} :  {month:ViewDate.month-1,year:ViewDate.year,yearindex:ViewDate.yearindex})
                    }
                }}
                    >
                    <img src={arrowleft}/>
                </td>
                <td className='calendrier-inputMonthYear'>
                <DropdownCustom data={{label: 'Month',name:'calendrier-month',list:listData,selectedIndex:ViewDate.month}} onChange={(e) => { setViewDate({month:e.selectedIndex,year:ViewDate.year, yearindex:ViewDate.yearindex})} }/>
                <DropdownCustom data={{label: 'Year',name:'calendrier-year',list:listYear,selectedIndex:ViewDate.yearindex}} onChange={(e) => { setViewDate({month:ViewDate.month,year:parseInt(e.value),yearindex:rangeYearMax - parseInt(e.value)})} }/>
                </td>
                <td onClick={(e)=>{
                    if ( ViewDate.year === rangeYearMax && ViewDate.month === 11 ){
                    } else {
                        setViewDate(ViewDate.month === 11 ? {month:0,year:ViewDate.year+1,yearindex:ViewDate.yearindex-1} :  {month:ViewDate.month+1,year:ViewDate.year,yearindex:ViewDate.yearindex})
                    }
                }
                }>
                    <img src={arrowright}/>
                </td>
            </thead>
            {header}
            {tab}
        </div>
        );
        return tab;
    }
    return (
        <>
            <div className={'full-container-'+id}>
                <input id={id} type="text" value={DateCal.toLocaleDateString(objectformatCalendrier[formatCalendrier][2],{weekday:'long',day: 'numeric',month: 'long',year:'numeric'})} onClick={(e)=> Open === 1 ? setOpen(0) : setOpen(1)}/>
                <div className="calendrier-container">
                {
                    Open === 1 &&
                    (getTab())
                }
                </div>
            </div>
        </>
    );
}

export default CalendrierCustom;