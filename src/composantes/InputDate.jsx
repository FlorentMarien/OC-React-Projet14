import './../styles/Input.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/src/stylesheets/datepicker.scss'
function InputDate(data) {
    data = data.data;
    return (
        <>
        <label>{data.label}</label>
        <DatePicker selected={data.state[0]} onChange={(date) => data.state[1](date)} />
        </>
    );
}

export default InputDate;