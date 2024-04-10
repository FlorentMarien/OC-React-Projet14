import './../styles/Index.css';
import './../styles/Input.css';
import InputText from "../composantes/InputText";
import InputNumber from "../composantes/InputNumber";
function Index() {
  function addEmploye(e){
    e.preventDefault();
    alert("add");
  }
  return (
    <section>
      <div>
        <p>Create Employee</p>
        <form onSubmit={(e)=>{addEmploye(e)}}>
          <div>
            <InputText data={{label: 'Firstname',name:''}} />
            <InputText data={{label: 'Lastname',name:''}} />
            <InputText data={{label: 'Date of birth',name:''}} />
            <InputText data={{label: 'Start Date',name:''}} />
          </div>
          <div className='formborder'>
            <InputText data={{label: 'Street',name:''}} />
            <InputText data={{label: 'City',name:''}} />
            <InputText data={{label: 'State',name:''}} />
            <InputNumber data={{label: 'Zip Code',name:''}} />
          </div>
          <div>
            <InputText data={{label: 'Department',name:''}} />
            <input type='submit' value='Save' />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Index;
