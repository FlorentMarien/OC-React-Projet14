import './../styles/Input.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import HeaderDatatable from './HeaderDatatable';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { departments } from '../assets/data/data';

import {DatatableCustom, ColumnCustom} from './DatatableCustom';

function Datatable(props) {
    const [Search,setSearch] = useState('');
    let data = props.data;
    return (
        <>
         <DatatableCustom id={props.id} data={data}>
            <ColumnCustom field="firstname" sortable></ColumnCustom>
            <ColumnCustom field="lastname" ></ColumnCustom>
            <ColumnCustom field="city"></ColumnCustom>
            <ColumnCustom field="street"></ColumnCustom>
            <ColumnCustom field="dateofbirth" dataType={"date"} sortable></ColumnCustom>
            <ColumnCustom field="departments"></ColumnCustom>
            <ColumnCustom field="startdate" dataType={"date"} sortable></ColumnCustom>
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