import { DropDownList } from '@progress/kendo-react-dropdowns';
import '../styles/default-ocean-blue.css'
function Dropdown(data) {
    data = data.data;
    let list = [];
    data.list.forEach(element => {
        list.push(element.name);
    });
    return (
        <>
            <label>{data.label}</label>
            <DropDownList id={data.name} name={data.name} data={list} defaultValue={list[0]} />
        </>
    );
}

export default Dropdown;