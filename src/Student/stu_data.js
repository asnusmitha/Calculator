import React, { useEffect, useState } from "react";
import "./data.css";
import stu from "../student.jpg";
import axios from "axios";
import DatabaseOps from "./dbops";
function StuData() {

    const [astu, setAStu]=useState([])
    const [bstu, setBStu]=useState([])
    const [a,setA]=useState(false)
    const [b,setB]=useState(false)
    const [database, setDatabase]=useState(false);
    const [api, setApi]=useState(false);

    useEffect(()=>{
        axios.get("http://localhost:5090/asec")
        .then((response)=>{
            setAStu(response.data);
        })
        .catch((err)=> console.log(err));

        axios.get("http://localhost:5090/bsec")
    .then((response)=>{
        setBStu(response.data);
    })
    .catch((err)=> console.log(err));
    })

 

    const displayDb=()=>{
        setDatabase(!database);
    }

    const displayApi=()=>{
        setApi(!api);
    }

    const adis=()=>{
        setA(!a);
    }

    const bdis=()=>{
        setB(!b);
    }

  return (
    <div class="container2">
      <div class="row">
        <div class="col-4">
          <button id="bun" onClick={displayDb}>Database</button>
          {database && 
            <div>
              <DatabaseOps/>
            </div>
          }
        </div>
        <div class="col-4">
          <h3>
            Student Details &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-person-vcard"
              viewBox="0 1 18 18"
            >
              <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
            </svg>
          </h3>
          <img id="img" src={stu} />
        </div>
        <div class="col-4">
          <button id="bun" onClick={displayApi}>API</button>
          {api && 
          <div>
            <h3>Details of Student</h3>

                <h4 id="h4" onClick={adis}>A Section</h4>
                {a && 
                <table class="table table-sm">
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tbody>
                {astu.map((data,id)=>(
                    <tr>
                        <td>{data.rollno}</td>
                        <td>{data.name}</td>
                        <td>{data.marks}</td>
                    </tr>
                ))}
            </tbody>
            </table>
}
        
        
                <h4 id="h4" onClick={bdis}>B Section</h4>
                {b &&
                <table class="table table-sm">
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Marks</th>
            </tr>
            <tbody>
                {bstu.map((data,id)=>(
                    <tr>
                        <td>{data.rollno}</td>
                        <td>{data.name}</td>
                        <td>{data.marks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default StuData;
