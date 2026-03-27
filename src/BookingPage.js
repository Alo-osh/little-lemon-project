import { useState } from "react";

function Booking(){
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
        const[availableTimes,setAvailableTimes]=useState(["17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ])


    const[num,setNum]=useState(0);
    const[ocasion,setocasion]=useState(["Birthday","Anniversary"]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Thank you for your submission");
        reset();
    }
        const reset=()=>{
        setDate("");
        setNum(0);
        setTime("17:00");
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
            <fieldset>
                <div>
        <label for="Date">Date: </label>
        <input type="date" name="date" value={date} onChange={(e)=>setDate(e.target.value)} required></input>
        </div>
        <div>
        <lable for="time">Time: </lable>
        <select id="time" value={time} onChange={(e)=>setTime(e.target.value)} required>
        {availableTimes.map((available)=>(
          <option key={available} value={available} onChange={(e)=>setAvailableTimes(e.target.value)}>{available}</option>)
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
        <button type="submit" disabled={!isValid()} >Reserve</button>
            </fieldset>
        </form>
        </div>
    );
}
export default Booking;