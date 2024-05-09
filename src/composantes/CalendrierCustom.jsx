import './../styles/CalendrierCustom.css';
import { useState,useEffect } from 'react';
import  DropdownCustom from './DropdownCustom';
import moment from 'moment';
import arrowleft from './../assets/icon/arrow-left-svgrepo-com.svg';
import arrowright from './../assets/icon/arrow-right-svgrepo-com.svg';
function CalendrierCustom(props) {
    const [Open,setOpen] = useState(0);
    const [DateCal,setDateCal] = useState(props.selected);
    const [ViewDate,setViewDate] = useState({month:DateCal.getMonth(),year:DateCal.getFullYear(),yearindex:30});
    const arrayData = ["Janvier","Fevrier","Mars","Avril","Mai","Juin",'Juillet',"Aout","Septembre","Octobre","Novembre","Decembre"];
    let listData = arrayData.map((e)=>{
        return { label:e,  value:e }
    });
    let listYear = [];
    const rangeYearmin = 1970;
    const rangeYearmax = new Date().getFullYear()+30;
    const rangeYear= [rangeYearmin, rangeYearmax];
    let rangeYearX = rangeYear[1]-rangeYear[0];
    for(rangeYearX;rangeYearX>=0;rangeYearX--){
        listYear.push({label:rangeYear[0]+rangeYearX,value:rangeYear[0]+rangeYearX});
    }
    
    useEffect(() => {
        setDateCal(props.selected);
    },[props.onChange]);

    function getTab(){
        const date = new Date(ViewDate.year, ViewDate.month, 1);
        const firstDayOfMonth = date.getDay() === 0 ? 6 : date.getDay() - 1;
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
            if(props.onChange !== undefined) props.onChange(date);
            else setDateCal(date);
        }

        let tab;
        let z = 1;
        let x = 1;
        let y = 1;
        let limittable = ((lastDayOfMonth + firstDayOfMonth) > 35) ? 6 : 5 ;
        for(y=1;y <= limittable;y++){
            let cel;
            for(x=1;x<=7;x++){
                let data = "";
                if(z > firstDayOfMonth) data = {content:z-firstDayOfMonth,class:"calendrier-actual-month",date:new Date(ViewDate.year, ViewDate.month, z-firstDayOfMonth)};
                if(z <= firstDayOfMonth) data = {content:z+nbrdayBeforeMonth-firstDayOfMonth,class:"calendrier-before-month",date:new Date(beforeMonth.getFullYear(), beforeMonth.getMonth(), z+nbrdayBeforeMonth-firstDayOfMonth)};
                if(z > (lastDayOfMonth+firstDayOfMonth)) data = {content:z-(lastDayOfMonth+firstDayOfMonth),class:"calendrier-after-month",date:new Date(afterMonth.getFullYear(), afterMonth.getMonth(), z-(lastDayOfMonth+firstDayOfMonth))};
                
                if(data.date.toDateString() === DateCal.toDateString()) data.class += " date-active";
                cel = (
                    <>
                        {cel}
                        <td className={data.class} onClick={(e) => clickhandle(data.date) }>{data.content}</td>
                    </>
                );
                z++;
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
        <div id={props.id} className='calendrier'>
            <thead>
                <td onClick={(e)=>{
                    if ( ViewDate.year === rangeYearmin && ViewDate.month === 0 ){
                    } else {
                    setViewDate(ViewDate.month === 0 ? {month:11,year:ViewDate.year-1,yearindex:ViewDate.yearindex+1} :  {month:ViewDate.month-1,year:ViewDate.year,yearindex:ViewDate.yearindex})
                    }
                }}
                    >
                    <img src={arrowleft}/>
                </td>
                <td className='month'>
                
                <DropdownCustom data={{label: 'Month',name:'calendrier-month',list:listData,selectedIndex:ViewDate.month}} onChange={(e) => { setViewDate({month:e.selectedIndex,year:ViewDate.year, yearindex:ViewDate.yearindex})} }/>
                </td>
                <td>
                <DropdownCustom data={{label: 'Year',name:'calendrier-year',list:listYear,selectedIndex:ViewDate.yearindex}} onChange={(e) => { setViewDate({month:ViewDate.month,year:parseInt(e.value),yearindex:rangeYearmax - parseInt(e.value)})} }/>
                </td>
                <td onClick={(e)=>{
                    if ( ViewDate.year === rangeYearmax && ViewDate.month === 11 ){
                    } else {
                        setViewDate(ViewDate.month === 11 ? {month:0,year:ViewDate.year+1,yearindex:ViewDate.yearindex-1} :  {month:ViewDate.month+1,year:ViewDate.year,yearindex:ViewDate.yearindex})
                    }
                }
                }>
                    <img src={arrowright}/>
                </td>
            </thead>
            <thead>
                <td><p>L</p></td>
                <td><p>M</p></td>
                <td><p>M</p></td>
                <td><p>J</p></td>
                <td><p>V</p></td>
                <td><p>S</p></td>
                <td><p>D</p></td>
            </thead>
            {tab}
        </div>
        );
        return tab;
    }
    return (
        <>
            <div className={'full-container-'+props.id}>
                <input type="text" value={DateCal.toDateString()} onClick={(e)=> Open === 1 ? setOpen(0) : setOpen(1)}/>
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