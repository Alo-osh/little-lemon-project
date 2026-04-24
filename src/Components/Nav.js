import "../App.css";
import logo from '../images/Logo.svg';
import {Link} from 'react-router-dom'
function Nav(){
   const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
    return(
        <div className="navigation">
            <img src={logo}></img>
            <ul className="list">
                <Link to="/"><li>Home</li></Link>
                <Link onClick={handleClick("about")}><li>About</li></Link>
                <Link onClick={handleClick("menu")}><li>Menu</li></Link>
                <Link to="/booking"><li>Reservation</li></Link>
                <Link to="/OnlineOrdering"><li>Order online</li></Link>
                <Link to="/LogIn"><li>Login</li></Link>


            </ul>
        </div>
    );
}
export default Nav;