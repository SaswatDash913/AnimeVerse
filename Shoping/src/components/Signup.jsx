import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { Signupp } from "../features/TotSlice";
import {Link, NavLink,useNavigate} from 'react-router-dom'
import './Signuppp.css'; 
function Signup(){
    const[Info,setInfo] = useState('')
    const[Pass,setPass] = useState('')
    const[error,seterror] = useState('')
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    
  const handleInfo =(event)=>{
    setInfo(event.target.value)
  }
  
  const handlePass=(event)=>{
    setPass(event.target.value)
  }
  const addData = (e)=>{
    e.preventDefault();
    if(!Info || !Pass)
    {
        seterror("both the fields are required")
        return
    }
    if(Pass.length<6)
    {
        seterror("password is too small")
        return
    }
    seterror("")
    setPass("")
    setInfo("")
    dispatch(Signupp({ user: Info, pass:Pass }));
    Navigate("/login")
}    
    return(
        <div className="Signup-body">
        <div className="flexing">
            <div className="mainSignup">
                <h1 className="signup-title">SignIn!</h1>
               
                <div className="user1">
                    <input className="inp1"type="text"placeholder="Username"onChange={handleInfo}></input>
                </div>
                <div className="pass1">
                    <input className="imp1"type="password"placeholder="password"onChange={handlePass}></input>
                </div>
                <div className="bm1">
                    <button className="b1"onClick={addData}>submit</button>
                </div> 
            </div>
        </div>
        {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Signup