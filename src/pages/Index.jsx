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
  const [State,SetState] = useState({label:states[0].name,value:states[0].name,selectedIndex:0})
  const [Department,SetDepartment] = useState({label:departments[0].name,value:departments[0].name,selectedIndex:0});

  const[StateStartDate,SetStateStartDate] = useState(new Date())
  const[StateDateOfBirth,SetStateDateOfBirth] = useState(new Date())
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
    console.log(data)
    dispatch({type:"ADD_USER",listuser:data})
    //notify();
    //confirmAlert(options);
    setModaleValue({...ModaleValue,open:1,setstatemodale:setModaleValue});
  }

  function getForm(){
    let data = {
      firstname: document.getElementById("input-firstname").value,
      lastname: document.getElementById("input-lastname").value,
      dateofbirth: StateDateOfBirth.toJSON(),
      startdate: StateStartDate.toJSON(),
      street: document.getElementById("input-street").value,
      city: document.getElementById("input-city").value,
      state: State.label,
      zipcode: document.getElementById("input-zipcode").value,
      departments: Department.label
  };
  return data;
  }
  
  return (
    <>
    <section >
      <div className='titlePage'>
        <h3>Formulaire</h3>
      </div>
      <Modale data={ModaleValue}></Modale>
      <div className='page'>
        <ToastContainer />
        <form onSubmit={(e)=>{addEmploye(e)}}>
          <div>
            <InputText data={{label: 'Firstname',name:'input-firstname',iconType:0}} />
            <InputText data={{label: 'Lastname',name:'input-lastname',iconType:0}} />
            <InputDate data={{label: 'Date of Birth',name:'input-datebirth',iconType:4}} state={[StateDateOfBirth,SetStateDateOfBirth]} rangeYear={[1940,new Date().getFullYear()]} formatCalendrier={"en-US"}/>
            <InputDate data={{label: 'Start Date',name:'input-startdate',iconType:4}} state={[StateStartDate,SetStateStartDate]}  rangeYear={[2000,new Date().getFullYear()+5]} rangeWeekday={[6,0]} formatCalendrier={"fr-FR"}/>
          
            <InputText data={{label: 'Street',name:'input-street',iconType:3}} />
            <InputText data={{label: 'City',name:'input-city',iconType:1}} />
            <DropDown data={{label: 'State',name:'input-state',iconType:5,data:{list:states,selectedIndex:State.selectedIndex},state:SetState}} />
            <InputNumber data={{label: 'Zip Code',name:'input-zipcode',iconType:1}} />
          
            <DropDown data={{label: 'Department',name:'input-department',iconType:2,data:{list:departments,selectedIndex:Department.selectedIndex},state:SetDepartment}} />
            <input type='submit' value='Save' />
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Index;
