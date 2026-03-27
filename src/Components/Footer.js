import Asset from '../images/Asset 20@4x.png'
import Nav from './Nav'
function Footer(){
    return(
        <div>
        <footer>
            <img src={Asset}></img>
             <div className='dormatNav'>
                <h4>Dormat navigation</h4>
                <a href="/"><li>Home</li></a>
             <a href="#about"><li>About</li></a>
                <a href="#menu"><li>Menu</li></a>
                <a href="#reservation"><li>Reservation</li></a>
                <a href="#online"><li>Order online</li></a>
                <a href="#login"><li>Login</li></a>
                </div>
                <div>
                    <h4>Contact Me</h4>
                    <a href="habeebali072@gmail.com"><li>email</li></a>
                </div>
                <div>
                    <h4>Social Media links</h4>
                    <a href=""><li>Facebook</li></a>
                    <a href=""><li>Instagram</li></a>
                </div>
        </footer>
        </div>
    )
}
export default Footer;