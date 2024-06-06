import './../styles/Input.css';
import DatePicker from 'react-datepicker'
import CalendrierCustom from './CalendrierCustom'
import 'react-datepicker/src/stylesheets/datepicker.scss'
import icon1 from './../assets/icon/user-svgrepo-com.svg';
import icon2 from './../assets/icon/city-svgrepo-com.svg';
import icon3 from './../assets/icon/enterprise-svgrepo-com.svg';
import icon4 from './../assets/icon/gps-svgrepo-com.svg';
import icon5 from './../assets/icon/calendar-date-svgrepo-com.svg';
import icon6 from './../assets/icon/country-flag-svgrepo-com.svg';
import { useState } from 'react';
function InputDate(props) {
    let data = props.data;
    let iconArray = [icon1,icon2,icon3,icon4,icon5,icon6];
    let indexIcon = props.data.iconType === undefined ? 0 : props.data.iconType;
    return (
        <div className='container-input'>
            <label>{data.label}</label>
            <div>
                <img src={iconArray[indexIcon]} />
                    {/*<DatePicker id={data.name} name={data.name} selected={props.state[0]} onChange={(date) => props.state[1](date)} />*/}
                    <CalendrierCustom id={data.name} selected={props.state[0]} onChange={(date) => { props.state[1](date);}} rangeYear={props.rangeYear} rangeWeekday={props.rangeWeekday} formatCalendrier={props.formatCalendrier}/>
            </div>
        </div>
    );
}

export default InputDate; 