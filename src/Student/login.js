import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
function Login() {
    const details={name:"susmitha",password:"susmi@123"};
    const[user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const [emp, setEmp]=useState([]);

    function Show(){
        if(details.name===user && details.password===password){
        alert("Welcome to Accenture");
        navigate("/studata");
        console.log(emp.name)
        }
        else{
            alert("Invalid User");
        }
    }

    return ( 
        <div class="container1">
            <br></br><br></br><br></br><br></br>
            <div id="card2">
              <div class="s">
                <h4>Login Page</h4>
            <div class="t">
            <label>Login:     <input type="text" required onChange={(e)=>{setUser(e.target.value)}}></input></label><br></br><br></br>
            <label>Password: <input type="password" required onChange={(e)=>{setPassword(e.target.value)}}></input></label><br></br><br></br>
            <button type="button" class="btn btn-primary" id="butn" onClick={()=>Show()}>Login</button>
            </div>
            </div>
            </div>
            </div>
     );
}

export default Login;