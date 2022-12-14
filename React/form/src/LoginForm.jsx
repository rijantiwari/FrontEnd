import React from 'react'
import { useState } from 'react';

function LoginForm() {
    const[userinfo,setUserinfo]=useState({
        username:"",
        password:"",
        cpassword:"",
        passwordError:""
    });
    
    // const[username,setUserName] = useState("");
    // const[password, setPassword] = useState("");
    // const[cpassword,setCpassword]=useState("");
    // const[passwordError,setPasswordEroor]=useState("");
    // const[isEnabled, setisEnabled] = useState("");
    const onSubmit= (e)=>{
        e.preventDefault();
    !(userinfo.username === "" || userinfo.password ==="" || userinfo.cpassword === " ")
        ?(userinfo.password===userinfo.cpassword)
        ? alert (" Form Submitted") 
        :setUserinfo(
            {...userinfo, passwordError:"Both Password Should match"}
        )
    : alert ("Please enter all Username and Password values");
       
    }   
   
    const handleUserName = ({target:{value}}) =>{
        setUserinfo(
            {...userinfo, username:value}
        )
    }

    const handlePassword = ({target:{value}}) =>{
        setUserinfo(
            {...userinfo, password:value})
        
    }
   
    
// console.log(cpassword,"Cpas")
  return (
    <> 
    <div className='form-container'>
    <form>
    <h1> Login Form</h1>
    <label> Username</label>
    <input type="text" placeholder="enter your username" id='username_input'
     onChange={handleUserName} value={userinfo.username}></input> 
    <br></br> <br></br>
    <label> Password</label>
    <input type="password" placeholder='Enter password' value={userinfo.password}
    onChange={handlePassword}></input>
    <p className='passwordError'> {userinfo.passwordError}</p>
   
    <br></br> <br></br>
    <button type='submit' onClick={onSubmit}>Register</button>
    </form>
   
    </div>
   
    </>
  )
}

export default LoginForm