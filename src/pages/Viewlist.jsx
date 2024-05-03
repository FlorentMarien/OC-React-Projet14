import Datatable from '../composantes/Datatable';
import './../styles/Input.css';
import flux from './../flux';
function Viewlist() {
  let filterForm = flux.getState().listuser;
  return (
    <section>
      <div className='bg--white'>
        <Datatable data={flux.getState().listuser}/>
      </div>
    </section>
  );
}

export default Viewlist;
