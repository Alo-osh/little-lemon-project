import { useState } from "react";
import { validateEmail } from "./utils";
const PassError=()=>{
    return(<p className="error_field">Password must be 8 chrachters</p>);
}
function LogIn(){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState(
        {value:"",
            isTouched:false,
        }
    );

    const handleSubmit=(e)=>{
        e.preventDefault();
        reset()
    }
        const reset=()=>{
        setEmail("");
        setPassword({value:"",isTouched:false})
    }
    const isValid=()=>{
        return (
        validateEmail(email) &&
        password.value.length>=8);
    }

    return(
        <div className="Form">
        <form onSubmit={handleSubmit}>
            <fieldset>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" required></input>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" value={password.value} onBlur={()=>setPassword({...password,isTouched:true})}
             onChange={(e)=>{setPassword({...password,value:e.target.value})}} placeholder="Password" required></input>
             {(password.value.length <8 && password.isTouched==true)?(<PassError/>):null}
        </div>

        <button type="submit" disabled={!isValid()}>Log in</button>
            </fieldset>
        </form>
        </div>
    );
}
export default LogIn;