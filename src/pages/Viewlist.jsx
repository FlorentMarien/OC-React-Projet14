import Datatable from '../composantes/Datatable';
import './../styles/Input.css';
import './../styles/Viewlist.css';
import flux from './../flux';
function Viewlist() {
  let filterForm = flux.getState().listuser;
  return (
    <section >
      <div className='page'>
        <Datatable id={"datatable"} data={flux.getState().listuser}/>
      </div>
    </section>
  );
}

export default Viewlist;
