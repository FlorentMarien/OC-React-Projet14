//import { DropDownList } from '@progress/kendo-react-dropdowns';
//import '../styles/default-ocean-blue.css'
import { useState,useEffect } from "react";
function DropDownCustom( props ) {

    let data = props.data;
    let [Open,SetOpen] = useState(0);
    let [DropValue,SetDropValue] = useState({label:data.list[data.selectedIndex].label,value:data.list[data.selectedIndex].value,selectedIndex:data.selectedIndex});
    useEffect(() => {
        //props.onChange(DropValue);
    },[DropValue])

    function Clicklisthandle(e){
        let selectedIndex = e.target.options.selectedIndex;
        props.onChange({label:e.target.options[selectedIndex].label,value:e.target.value, selectedIndex:selectedIndex});
        SetDropValue({label:e.target.options[selectedIndex].label,value:e.target.value, selectedIndex:selectedIndex});
    }
    return (
        <div> 
            {
            Open === 0 &&
            <select onChange={(e) => Clicklisthandle(e)} value={DropValue.value}>
            {    
                data.list.map((element) =>
                <option value={element.value}>{element.label}</option>
            )}
            </select>
            }
        </div>
    );
}


export default DropDownCustom;
/*
export interface SelectorProps {
    options: Array<optionsProps>;
    values?: string[];
    onChange?: (event: Event, options: optionsProps) => void;
  }
  */
 /*

 */