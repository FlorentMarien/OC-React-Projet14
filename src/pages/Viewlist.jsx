import Datatable from '../composantes/Datatable';
import './../styles/Input.css';
import './../styles/Viewlist.css';
import flux from './../flux';
function Viewlist() {
  let filterForm = flux.getState().listuser;
  console.log("viewlist",filterForm)
  /*
  let obj;
    
  props.children.forEach((column)=>{
      let field = column.props.field;
      obj = {
          ...obj,
          [field]: column.props['dataType'] === undefined ? 'string' : column.props['dataType'],
      }
  })
    
  filterForm.forEach((e)=>{
      Object.keys(e).forEach((efield)=>{
          if(obj[efield] === "date"){
              e[efield] = new Date(e[efield]);
          }
      });
  });*/
  return (
    <section >
      <div className='titlePage'>
        <h3>DataTable</h3>
      </div>
      <div className='page bg-none'>
        <Datatable id={"datatable"} data={filterForm}/>
      </div>
    </section>
  );
}

export default Viewlist;
