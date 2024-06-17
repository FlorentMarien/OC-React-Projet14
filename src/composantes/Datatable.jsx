import './../styles/Input.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import HeaderDatatable from './HeaderDatatable';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import iconAdd from "./../assets/icon/add-circle-svgrepo-com.svg";
import { departments } from '../assets/data/data';

import { useNavigate } from "react-router-dom";
//import {DatatableCustom, ColumnCustom} from './DatatableCustom';
import {DatatableCustom,ColumnCustom} from 'simple-datatable-lib/dist/components/DatatableCustom';


function Datatable(props) {
    const navigate = useNavigate();
    const [Search,setSearch] = useState('');

    let buttonAdd = (<div className='container-button'>
            <button className="button-add" onClick={(e)=>{ navigate("/addElement") }}>
                <img src={iconAdd} />
            </button>
        </div>
    );
    let data = props.data
    return (
        <>
         <DatatableCustom id={props.id} data={data} searchGlobal paginator={[5,15,25,50,100]} addElement={buttonAdd} >
            <ColumnCustom field="firstname" sortable search></ColumnCustom>
            <ColumnCustom field="lastname" ></ColumnCustom>
            <ColumnCustom field="city"></ColumnCustom>
            <ColumnCustom field="street"></ColumnCustom>
            <ColumnCustom field="dateofbirth" dataType={"date"} formatdateType="en-US" sortable search></ColumnCustom>
            <ColumnCustom field="departments"></ColumnCustom>
            <ColumnCustom field="startdate" dataType={"date"} formatdateType="fr-FR" sortable></ColumnCustom>
            <ColumnCustom field="state"></ColumnCustom>
            <ColumnCustom field="zipcode"></ColumnCustom>
         </DatatableCustom>
        
       
        {
            /*
            <DataTable globalFilter={Search} globalFilterFields={['firstname', 'lastname', 'dateofbirth', 'startdate','street','city','state','zipcode','departments']} emptyMessage="No customers found." header={HeaderDatatable({state:Search,setstate:setSearch})} value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} sortMode='multiple' tableStyle={{ minWidth: '50rem' }}>
            <Column field="firstname" sortable header="FirstName"></Column>
            <Column field="lastname" sortable header="LastName"></Column>
            <Column field="dateofbirth" sortable header="Date of birth"></Column>
            <Column field="startdate" sortable header="Start date"></Column>
            <Column field="street" sortable header="Street"></Column>
            <Column field="city" sortable header="City"></Column>
            <Column field="state" sortable header="State"></Column>
            <Column field="zipcode" sortable header="Zip Code"></Column>
            <Column field="departments" sortable header="Departments"></Column>
            </DataTable>
            */
        }
        </>
    );
}

export default Datatable;