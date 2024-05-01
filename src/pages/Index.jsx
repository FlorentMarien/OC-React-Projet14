import './../styles/Index.css';
import './../styles/Input.css';
import InputText from "../composantes/InputText";
import InputNumber from "../composantes/InputNumber";
import InputDate from "../composantes/InputDate";
import DropDown from "../composantes/Dropdown";
import {states,departments} from "../assets/data/data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modale from '../composantes/Modale';
function Index() {
  const dispatch = useDispatch();
  const [State,SetState] = useState("");
  const [Department,SetDepartment] = useState("");
  const [ModaleValue,setModaleValue] = useState({text:"Confirmation", open:0})
  //const notify = () => toast("Ajout réussi");
  const options = {
    title: 'Ajout Réussi',
    message: "L'utilisateur a été ajouté",
    buttons: [
      {
        label: 'Close',
        onClick: () => alert('Close')
      }
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
    willUnmount: () => {},
    afterClose: () => {},
    onClickOutside: () => {},
    onKeypress: () => {},
    onKeypressEscape: () => {},
    overlayClassName: "overlay-custom-class-name"
  };
  
  function addEmploye(e){
    e.preventDefault();
    let data = getForm();
    dispatch({type:"ADD_USER",listuser:data})
    //notify();
    //confirmAlert(options);
    setModaleValue({...ModaleValue,open:1,setstatemodale:setModaleValue});
  }

  function getForm(){
    let data = {
      firstname: document.getElementById("input-firstname").value,
      lastname: document.getElementById("input-lastname").value,
      dateofbirth: document.getElementById("input-datebirth").value,
      startdate: document.getElementById("input-startdate").value,
      street: document.getElementById("input-street").value,
      city: document.getElementById("input-city").value,
      state: State,
      zipcode: document.getElementById("input-zipcode").value,
      departments: Department.value === undefined ? Department : Department.value
  };
  return data;
  }

  return (
    <>
    <section>
      <Modale data={ModaleValue}></Modale>
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
            <DropDown data={{label: 'State',name:'input-state',list:states,state:SetState}} />
            <InputNumber data={{label: 'Zip Code',name:'input-zipcode'}} />
          </div>
          <div>
            <DropDown data={{label: 'Department',name:'input-department',list:departments,state:SetDepartment}} />
            <input type='submit' value='Save' />
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Index;
