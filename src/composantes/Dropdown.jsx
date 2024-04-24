//import { DropDownList } from '@progress/kendo-react-dropdowns';
//import '../styles/default-ocean-blue.css'
import Dropdown from '@gilbarbara/react-dropdown';
function DropDown(data) {
    data = data.data;
    let list = [];
    data.list.forEach(element => {
        list.push({label:element.name,value:element.name});
    });
    return (
        <>
            <label>{data.label}</label>
            <Dropdown className={"list-dropdown"} options={list} placeholder={list[0].value} onChange={(element) => data.state(element)}/>
        </>
    );
}

export default DropDown;