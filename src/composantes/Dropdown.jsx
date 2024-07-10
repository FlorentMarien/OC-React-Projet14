//import { DropDownList } from '@progress/kendo-react-dropdowns';
//import '../styles/default-ocean-blue.css'
import Dropdown from '@gilbarbara/react-dropdown';
import DropdownCustom from './DropdownCustom';
import icon1 from './../assets/icon/user-svgrepo-com.svg';
import icon2 from './../assets/icon/city-svgrepo-com.svg';
import icon3 from './../assets/icon/enterprise-svgrepo-com.svg';
import icon4 from './../assets/icon/gps-svgrepo-com.svg';
import icon5 from './../assets/icon/calendar-date-svgrepo-com.svg';
import icon6 from './../assets/icon/country-flag-svgrepo-com.svg';
function DropDown(props) {

    let data = props.data.data;
    let iconArray = [icon1,icon2,icon3,icon4,icon5,icon6];
    let indexIcon = props.data.iconType === undefined ? 0 : props.data.iconType;
    let list = [];
    data.list.forEach(element => {
        list.push({label:element.name,value:element.name});
    });
    return (
        <div className='container-input'>
            <label>{props.data.label}</label>
            <div>
            <img src={iconArray[indexIcon]} />
            <Dropdown className={"list-dropdown"} options={list} placeholder={list[0].value} onChange={(element) => {props.data.state({...element[0],selectedIndex:0})}}/>
            {/*<DropdownCustom data={{list:list,selectedIndex:data.selectedIndex}} onChange={(e) => {props.data.state(e)}}/>*/}
           </div>
        </div>
    );
}

export default DropDown;