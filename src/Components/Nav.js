import "../App.css";
import logo from '../images/Logo.svg';

function Nav(){
    return(
        <div className="navigation">
            <img src={logo}></img>
            <ul className="list">
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#menu"><li>Menu</li></a>
                <a href="#reservation"><li>Reservation</li></a>
                <a href="#online"><li>Order online</li></a>
                <a href="#login"><li>Login</li></a>


            </ul>
        </div>
    );
}
export default Nav;