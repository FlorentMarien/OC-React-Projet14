import Datatable from '../composantes/Datatable';
import './../styles/Input.css';
import './../styles/Viewlist.css';
import flux from './../flux';
function Viewlist() {
  let filterForm = flux.getState().listuser;
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
