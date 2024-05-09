import './../styles/Input.css';
import DatePicker from 'react-datepicker'
import CalendrierCustom from './CalendrierCustom'
import 'react-datepicker/src/stylesheets/datepicker.scss'
import { useState } from 'react';
function InputDate(data) {
    const [DateCal,setDateCal] = useState(new Date());
    data = data.data;
    return (
        <>
        <label>{data.label}</label>
        <DatePicker id={data.name} name={data.name} selected={DateCal} onChange={(date) => setDateCal(date)} />
        <CalendrierCustom id={data.name+"-custom"} selected={DateCal} onChange={(date) => {setDateCal(date);console.log(DateCal)}} />
        </>
    );
}

export default InputDate;