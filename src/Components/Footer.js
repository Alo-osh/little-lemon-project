import Asset from '../images/Asset 20@4x.png'
import {Link} from "react-router-dom"
const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
function Footer(){
    return(
        <div>
        <footer>
            <img src={Asset}></img>
             <div className='dormatNav'>
                <h4>Dormat navigation</h4>
                <Link to="/"><li>Home</li></Link>
                <Link onClick={handleClick("about")}><li>About</li></Link>
                <Link onClick={handleClick("menu")}><li>Menu</li></Link>
                <Link to="/booking"><li>Reservation</li></Link>
                <Link to="/OnlineOrdering"><li>Order online</li></Link>
                <Link to="/LogIn"><li>Login</li></Link>
                </div>
                <div>
                    <h4>Contact Me</h4>
                    <a href="habeebali072@gmail.com"><li>email</li></a>
                </div>
                <div>
                    <h4>Social Media links</h4>
                    <a href="https://github.com/Alo-osh"><li>GitHub</li></a>
                    <a href="https://medium.com/@habeebali072"><li>Medium</li></a>
                    <a href="https://www.linkedin.com"><li>LinkedIn</li></a>
                </div>
        </footer>
        </div>
    )
}
export default Footer;