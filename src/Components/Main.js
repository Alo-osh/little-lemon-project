import Catagorey from "./Catagorey.js";
import CustomerInfo from "./CustomersInfo.js";
import Chicago from "./Chicago";
function Main(){
    return(
        <div>
            <section id="menu-section">
         <Catagorey/>
         </section>
        <CustomerInfo/>
        <section id='about-section'>
          <Chicago/>
         </section>
        </div>
    )
}
export default Main;