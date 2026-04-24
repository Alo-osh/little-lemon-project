import { useEffect, useReducer,useState } from "react";
import BookingForm from "./BookingForm.js";
 import updateTimes from './updateTimes.js'
import { useNavigate } from "react-router-dom";
function MainForBookingPage(){
    const[date,setDate]=useState("2026/04/05");
    const navigate=useNavigate();
    const submitForm=(formData)=>{
       if(window.submitAPI(formData)){
            navigate("/ConfirmationPage");
        }
    }
    const intiaState={
     e:window.fetchAPI(new Date(date))
    }
    const intializeTimes =()=>{
   return intiaState;
    }
    useEffect(()=>{
        intializeTimes();
    },[date])
              const[availableTimes,setAvailableTimes]=useReducer(updateTimes,intializeTimes());
    return(
        <div>
          <main>
         <BookingForm date={date} navigate={navigate} submitForm={submitForm} setDate={setDate} setAvailableTimes={setAvailableTimes} availableTimes={availableTimes}/>
         </main>
        </div>
    )
}
export default MainForBookingPage;