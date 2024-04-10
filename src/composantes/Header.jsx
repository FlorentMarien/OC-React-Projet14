import './../styles/Header.css'
import { useNavigate } from "react-router-dom";
import iconwealth from './../assets/icon/iconwealth.png'
function Header() {
    const navigate = useNavigate();
    return (
        <nav>
            <img src={iconwealth} alt="icon wealth health"></img>
            <a onClick={(e)=>{navigate('/')}} >Home</a>
            <a onClick={(e)=>{navigate('/viewlist')}}>View current employe</a>
        </nav>
    );
}

export default Header;
