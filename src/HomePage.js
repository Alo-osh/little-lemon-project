import CallToAction from "./Components/CallToAction";
import Specials from "./Components/Specials";
import CustomersSay from "./Components/CustomersSay";
import Header from './Components/Header'
import Chicago from "./Components/Chicago";
import Footer from './Components/Footer';
import Main from './Components/Main';
import Nav from './Components/Nav.js'


function HomePage(){
    return(
        <>
        <Header/>
        <CallToAction/>
        <Specials/>
        <CustomersSay/>
        <Chicago/>
         <Footer/>
         <Main/>
        </>
    );
}
export default HomePage;
