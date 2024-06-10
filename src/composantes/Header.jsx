import './../styles/Header.css'
import { useNavigate } from "react-router-dom";
import iconwealth from './../assets/icon/iconwealthtransp.svg'
import iconIndex from './../assets/icon/data-table-reference-svgrepo-com.svg'
import iconViewlist from './../assets/icon/data-table-svgrepo-com.svg'
//import iconIndex from './../assets/icon/table-add-svgrepo-com.svg'
//import iconViewlist from './../assets/icon/table-svgrepo-com.svg'

function Header(props) {
    let openNavbar = props.state;
    const navigate = useNavigate();
    return (
        <nav className={openNavbar[0] === 1 && 'reduceNavbar'}>
            
                <>
                <img src={iconwealth} alt="icon wealth health"/>
                <div>
                    {
                    openNavbar[0] === 0 &&
                    <>
                        <a onClick={(e)=>{navigate('/')}} >Index</a>
                        {/*<a onClick={(e)=>{navigate('/addElement')}}>Liste Employés</a>*/}
                    </>
                    }
                    {
                    openNavbar[0] === 1 &&
                    <>
                        <img src={iconViewlist} onClick={(e)=>{navigate('/')}}/>
                        {/*<img src={iconViewlist} onClick={(e)=>{navigate('/addElement')}}/>*/}
                    </>
                    }
                </div>
                </>
            
        </nav>
    );
}

export default Header;
