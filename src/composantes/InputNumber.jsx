import './../styles/Input.css';
import icon1 from './../assets/icon/user-svgrepo-com.svg';
import icon2 from './../assets/icon/city-svgrepo-com.svg';
import icon3 from './../assets/icon/enterprise-svgrepo-com.svg';
import icon4 from './../assets/icon/gps-svgrepo-com.svg';
import icon5 from './../assets/icon/calendar-date-svgrepo-com.svg';
import icon6 from './../assets/icon/country-flag-svgrepo-com.svg';
function InputNumber(data) {
    data = data.data;
    let iconArray = [icon1,icon2,icon3,icon4,icon5,icon6];
    let indexIcon = data.iconType === undefined ? 0 : data.iconType;
    return (
        <div className='container-input'>
            <label>{data.label}</label>
            <div>
                <img src={iconArray[indexIcon]} />
                <input id={data.name} name={data.name} type='number'/>
            </div>
        </div>
    );
}

export default InputNumber;