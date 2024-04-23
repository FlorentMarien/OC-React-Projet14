import './../styles/Index.css';
import './../styles/Input.css';
import InputText from "../composantes/InputText";
import InputNumber from "../composantes/InputNumber";
import InputDate from "../composantes/InputDate";
import Dropdown from "../composantes/Dropdown";
import {states,departments} from "../assets/data/data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Index() {
  const notify = () => toast("Ajout réussi");
  function addEmploye(e){
    e.preventDefault();
    let data = getForm();
    console.log(data);
    notify();
  }
  function getForm(){
    let data = {
      firstname: document.getElementById("input-firstname").value,
      lastname: document.getElementById("input-lastname").value,
      datebirth: document.getElementById("input-datebirth").value,
      startdate: document.getElementById("input-startdate").value,
      street: document.getElementById("input-street").value,
      city: document.getElementById("input-city").value,
      state: document.getElementById("input-state").textContent,
      zipcode: document.getElementById("input-zipcode").value,
      department: document.getElementById("input-department").textContent
  };
  return data;
  }
  return (
    <>
    <section>
      <div>
        <ToastContainer />
        <p>Create Employee</p>
        <form onSubmit={(e)=>{addEmploye(e)}}>
          <div>
            <InputText data={{label: 'Firstname',name:'input-firstname'}} />
            <InputText data={{label: 'Lastname',name:'input-lastname'}} />
            <InputDate data={{label: 'Date of Birth',name:'input-datebirth'}}/>
            <InputDate data={{label: 'Start Date',name:'input-startdate'}}/>
          </div>
          <div className='formborder'>
            <InputText data={{label: 'Street',name:'input-street'}} />
            <InputText data={{label: 'City',name:'input-city'}} />
            <Dropdown data={{label: 'State',name:'input-state',list:states}} />
            <InputNumber data={{label: 'Zip Code',name:'input-zipcode'}} />
          </div>
          <div>
            <Dropdown data={{label: 'Department',name:'input-department',list:departments}} />
            <input type='submit' value='Save' />
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Index;
