import './../styles/Index.css';
import './../styles/Input.css';
import InputText from "../composantes/InputText";
import InputNumber from "../composantes/InputNumber";
import InputDate from "../composantes/InputDate";
import Dropdown from "../composantes/Dropdown";
import {states,departments} from "../assets/data/data";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Index() {
  const [startDateBirth, setStartDateBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const notify = () => toast("Ajout réussi");
  function addEmploye(e){
    e.preventDefault();
    notify();
  }
  return (
    <>
    <section>
      <div>
        <ToastContainer />
        <p>Create Employee</p>
        <form onSubmit={(e)=>{addEmploye(e)}}>
          <div>
            <InputText data={{label: 'Firstname',name:''}} />
            <InputText data={{label: 'Lastname',name:''}} />
            <InputDate data={{label: 'Date of Birth',name:'',state:[startDateBirth, setStartDateBirth]}}/>
            <InputDate data={{label: 'Start Date',name:'',state:[startDate, setStartDate]}}/>
          </div>
          <div className='formborder'>
            <InputText data={{label: 'Street',name:''}} />
            <InputText data={{label: 'City',name:''}} />
            <InputText data={{label: 'State',name:''}} />
            <Dropdown data={{label: 'State',name:'',list:states}} />
            <InputNumber data={{label: 'Zip Code',name:''}} />
          </div>
          <div>
            <Dropdown data={{label: 'Department',name:'',list:departments}} />
            <input type='submit' value='Save' />
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Index;
