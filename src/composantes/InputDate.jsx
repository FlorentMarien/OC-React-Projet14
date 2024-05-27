import './../styles/Input.css';
import DatePicker from 'react-datepicker'
import CalendrierCustom from './CalendrierCustom'
import 'react-datepicker/src/stylesheets/datepicker.scss'
import { useState } from 'react';
function InputDate(props) {
    let data = props.data;
    return (
        <>
        <label>{data.label}</label>
        {/*<DatePicker id={data.name} name={data.name} selected={props.state[0]} onChange={(date) => props.state[1](date)} />*/}
        <CalendrierCustom id={data.name} selected={props.state[0]} onChange={(date) => { props.state[1](date);}} rangeYear={props.rangeYear} rangeWeekday={props.rangeWeekday} formatCalendrier={props.formatCalendrier}/>
        </>
    );
}

export default InputDate; 