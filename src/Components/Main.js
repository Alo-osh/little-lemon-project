import Catagorey from "./Catagorey.js";
import { useState } from "react";
import CustomerInfo from "./CustomersInfo.js";
import Chicago from "./Chicago";
import CallToAction from "./CallToAction.js";
function Main(){
    return(
        <div>
         <Catagorey/>
        <CustomerInfo/>
        <section id='about-section'>
          <Chicago/>
         </section>
        </div>
    )
}
export default Main;