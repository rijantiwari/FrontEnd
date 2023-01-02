import React from 'react'
import { useState } from 'react';

function RegistrationForm() {
    const[username,setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[cpassword,setCpassword]=useState("");
    const[passwordError,setPasswordEroor]=useState("");
    const[isEnabled, setisEnabled] = useState("");
    const onSubmit= (e)=>{
        e.preventDefault();
    !(username === "" || password ==="" || cpassword === " ")
        ?(password===cpassword)
        ? alert (" Form Submitted") 
        :setPasswordEroor("*Both Passsword Should Match  ")
    : alert ("Please enter all Username and Password values");
       
    }   
   
    const handleUserName = ({target:{value}}) =>{
        setUserName(value);
    }
    const handlePassword = ({target:{value}}) =>{
        console.log(value,"Password");
        setPassword(value);
    }
    // console.log(username,"username");
    const handleConfirmPassword = ({target:{value}}) =>{
        console.log(value,"CPassword");
        // setPassword(event.target.value);
        setCpassword(value)
    }
// console.log(cpassword,"Cpas")
  return (
    <> 
    <form>
    <h1> Registration Form</h1>
    <label> Username</label>
    <input type="text" placeholder="enter your username" id='username_input'
     onChange={handleUserName} value={username}></input> 
    <br></br> <br></br>
    <label> Password</label>
    <input type="password" placeholder='Enter password' value={password}
    onChange={handlePassword}></input>
    <p className='passwordError'> {passwordError}</p>
    <label> Confirm Password</label>
    <input type="password" placeholder='Re-enter password' value={cpassword}
    onChange={handleConfirmPassword}></input>
    <br></br> <br></br>
    <button type='submit' onClick={onSubmit}>Register</button>
    </form>
   
    </>
  )
}

export default RegistrationForm