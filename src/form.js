import fruits from './fruits.css';
import React, { useState } from 'react';
function Form() {
    const[name,setName]=useState("");
    const[date,setDate]=useState("");
    const[gender,setGender]=useState("");
    const[Qualification,setQualification]=useState("");
    const[designation,setDesignation]=useState("");
    const[college,setCollege]=useState("");
    let Display=()=>{    
        document.getElementById("a1").innerHTML=name;
        document.getElementById("a2").innerHTML=date;
        document.getElementById("a3").innerHTML=gender;
        document.getElementById("a4").innerHTML=Qualification;
        document.getElementById("a5").innerHTML=designation;
        document.getElementById("a6").innerHTML=college;
    }
    let handleEvent=()=>{

        alert("The form is submitted successfully");
    }
    function a(event){
        var c=event.which;

    }
    
    return ( 
        <div class="e">
            <h1>Registration Form</h1>
            <div class="card">
            <form>
            <table class="e">
            <tr> 
            <th>
                        <label>Enter Name:</label> 
                        </th>
                        <th>
                    <input type="text" id='name' onChange={(e)=>setName(e.target.value)}/> 
                    </th>
                    </tr>   <br></br>
                   <tr>  
                    <th>      
                        <label>Date of birth:</label>
                        </th>
                    
                    <th>
                    <input type="date" id='date' onChange={(e)=>setDate(e.target.value)}/>
                    </th>
                    </tr><br></br>
                    <tr>
                    <th>      
                    <label>Gender:</label></th>
                    <th>
                    <label> <input type={'radio'} value='male' name='gender' onChange={(e)=>setGender(e.target.value)}></input>male</label>
                    <label><input type={'radio'} value='female' name='gender' onChange={(e)=>setGender(e.target.value)}></input> female</label> <br></br>
                    </th>
                       </tr><br></br>
                      <tr> 
                      <th><label>Qualification:</label> </th>
                       <th>
                    <input type="checkbox" value='UG' onChange={(e)=>setQualification(e.target.value)}/>UG
                    <input type='checkbox' value='PG' onChange={(e)=>setQualification(e.target.value)}/>PG 
                    </th>
                    </tr><br></br>
                    <tr>
                   <th>
                        <label>Designation:</label></th>
                        <th>
                    <input type='text' onChange={(e)=>setDesignation(e.target.value)}></input>
                    </th>
                    </tr><br></br>
                    <tr>
                        <th>
                            <label>Comments:</label>
                        </th>
                        <th>
                            <textarea id="comment" ></textarea>
                        </th>
                    </tr>

                   <tr>
                    <th>
                        <label>College:</label></th>
                        <th>
                            
                    <select onChange={(e)=>setCollege(e.target.value)}>
                        
                        <option></option>
                        <option>Kl University</option>
                        <option>Vignan University</option>
                        <option>VVIT</option>
                        <option>Veltech university</option>
                        <option>SRM</option>
                        <option>BITS</option>
                        </select>
                        </th>
                        </tr><br></br>
                       <tr>
                       <th>
                    <button type='button'onClick={handleEvent} >Submit</button></th>
                    <th>
                    <button type={'button'} onClick={Display}>Display</button></th>
                    </tr>
                    </table>
            </form>
            </div>
            <div class="card">
            <table class="e">
                <tr>
                    <th><p>Name:</p></th>
                    <th><p id='a1'></p></th>
                </tr>
                <tr>
                    <th><p>Date:</p></th>
                    <th><p id='a2'></p></th>
                </tr>
                <tr>
                    <th><p>Gender:</p></th>
                    <th><p id='a3'></p></th>
                </tr>
                <tr>
                    <th><p>Qualification:</p></th>
                    <th><p id='a4'></p></th>
                </tr>
                <tr>
                    <th><p>Designation:</p></th>
                    <th><p id='a5'></p></th>
                </tr>
                <tr>
                    <th><p>College:</p></th>
                    <th><p id='a6'></p></th>
                </tr>
            </table>
            </div>
            </div>
     );
}

export default Form;