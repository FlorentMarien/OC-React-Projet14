//import { DropDownList } from '@progress/kendo-react-dropdowns';
//import '../styles/default-ocean-blue.css'
import Dropdown from '@gilbarbara/react-dropdown';
import DropdownCustom from './DropdownCustom';
function DropDown(props) {
    
    let data = props.data.data;
    let list = [];
    data.list.forEach(element => {
        list.push({label:element.name,value:element.name});
    });
    return (
        <>
            <label>{props.data.label}</label>
            {
                /*
                     <Dropdown className={"list-dropdown"} options={list} placeholder={list[0].value} onChange={(element) => props.data.state({...element,selectedIndex:0})}/>
                */
            }
           <DropdownCustom data={{list:list,selectedIndex:data.selectedIndex}} onChange={(e) => {props.data.state(e)}}/>
        </>
    );
}

export default DropDown;