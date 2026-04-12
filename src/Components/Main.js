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
        <Chicago/>
        </div>
    )
}
export default Main;