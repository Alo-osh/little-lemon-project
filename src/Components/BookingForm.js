import { useState } from "react";

function BookingForm({navigate,submitForm,availableTimes,setAvailableTimes,date,setDate}){

    const[time,setTime]=useState("17:00");
    const[num,setNum]=useState(0);
    const[ocasion,setocasion]=useState("Birthday");
    const handleSubmit=(e)=>{
        e.preventDefault();
        setAvailableTimes({type:"reserve_time",payload:time});
        reset();
        navigate("/ConfirmationPage")
        const saving={date,time,num,ocasion}
        submitForm(saving)
    }
        const reset=()=>{
        setDate("");
        setNum(0);
        setTime("");
        setocasion("Birthday");
    }
    const isValid=()=>{
        return (date &&
        time &&
        num &&
        ocasion);
    }

    return(
        <div className="Form">
        <form onSubmit={handleSubmit}>
            <fieldset className="reservingFeild">
                <div>
                <h3>Reserve a Table</h3>
        <label htmlFor="Date">Date: </label>
        <input type="date" name="date" value={date} onChange={(e)=>setDate(e.target.value)} required></input>
        </div>
        <div>
        <lable htmlFor="time">Available Times: </lable>
        <select id="time" value={time} onChange={(e)=>{setTime(e.target.value)}} required>
        {availableTimes?.e?.map((available)=>(
          <option key={available} value={available}>{available}</option>)
        )}
        </select>
        </div>
        <div>
          <lable for="number">Number of guests: </lable>
          <input type="number" name="number" min={1} max={10} value={num} onChange={(e)=>{setNum(e.target.value)}} required></input>
        </div>
        <div>
        <label for="ocasion">Ocasion: </label>
        <select name="ocasion" value={ocasion} onChange={(e)=>setocasion(e.target.value)} required>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        </div>
        <button type="submit" disabled={!isValid()}>Reserve</button>
            </fieldset>
        </form>
        </div>
    );
}
export default BookingForm;