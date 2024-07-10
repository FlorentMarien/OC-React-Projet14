import { useState } from 'react';
import './../styles/Modale.css';

function Modale(data) {

    //let [Open,setOpen] = useState(data.data.open);
    data = data.data;
    return (
        <>
        {
        data.open === 1 &&
        <div className='modale'>
            <div className='modale-container'>
                <p>{data.text}</p>
                <button onClick={(e)=>{ data.setstatemodale({text:data.text,open:0,setstatemodale:data.setstatemodale}) }}>Close</button>
            </div>
        </div>
        }
       
        </>
    );
}

export default Modale;