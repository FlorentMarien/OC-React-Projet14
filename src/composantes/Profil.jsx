import './../styles/Profil.css';
import Burger from './../assets/icon/burger-menu-svgrepo-com.svg';
import BurgerClose from './../assets/icon/burger-menu-right-svgrepo-com.svg';
import Loop from './../assets/icon/loop.svg';
import Roue from './../assets/icon/303259.svg';
import Notify from './../assets/icon/notification-svgrepo-com.svg';
import iconPdp from './../assets/icon/pdp.webp';

function Profil(props) {
    let openNavbar = props.state;
    return (
        <div className='profil'>
            <div>
                <img src={openNavbar[0] === 0 ? Burger : BurgerClose} onClick={(e) => { openNavbar[0] === 0 ? openNavbar[1](1) : openNavbar[1](0)}} />
                <img src={Loop} />
            </div>
            <div>
                <img src={Notify} />
                <img src={Roue} />
                <div className='profil-card'>
                    <img src={iconPdp} />
                    <div>
                        <p className='card-job'>Admin</p>
                        <p className='card-name'>Marien Florent</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil;
