import axios from "axios";
import "./login.css";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function DatabaseOps() {
  const [itemsList, setitemsList] = useState({});
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [che4, setChe4] = useState(false);
  const [che5, setChe5] = useState(false);
  const [var1, setVar] = useState("");

  const navigate=useNavigate();

  const name = useRef();
  const nname = useRef();
  const rollno = useRef();
  const marks = useRef();
  const coll = useRef();

  const [emp, setEmp] = useState([]);


  
function compare(){
    navigate("/comp")
}

//   useEffect(() => {
//     axios
//       .get("http://localhost:5090/")
//       .then((response) => {
//         setEmp(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, [emp]);

  const change1 = (e) => {
    e.preventDefault();
    const data2 = {
      name: name.current.value,
      coll:coll.current.value,
    };

    axios.post("http://localhost:5090/remstu").then((res) => console.log(res));
    setitemsList(data2);
    alert("Customer removed");
  };

  const change2 = (e) => {
    e.preventDefault();
    const data2 = {
      name: name.current.value,
      nname: nname.current.value,
      coll:coll.current.value,
    };
    axios
      .post("http://localhost:5090/updatestu", data2)
      .then((res) => console.log(res));
    setitemsList(data2);
    alert("Customer Updated");
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const data2 = {
      id: Math.random(1 * 100),
      name: name.current.value,
      rollno: Number(rollno.current.value),
      marks: Number(marks.current.value),
      coll:coll.current.value,
    };
    axios
      .post("http://localhost:5090/addstu", data2)
      .then((res) => console.log(res));
      console.log(coll.current.value)
    setitemsList(data2);
    alert("Customer Added");
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-4">
          <h3 id="h3id">Operations</h3>
            <div id="card3">
              <div class="s">
                <br></br>
                <input
                  class="add"
                  id="a"
                  onChange={() => setCheck1(!check1)}
                  type="checkbox"
                />
                &nbsp;&nbsp;&nbsp;Add <br></br>
                {check1 && (
                  <div>
                    <form method="POST">
                    <div class="mb-3">
                        <label>
                          Section:<br></br>
                          <input type="text" ref={coll} name="coll" />
                        </label>
                      </div>
                      <div class="mb-3">
                        <label>
                          Name: <br></br>
                          <input type="text" name="name" ref={name} />
                        </label>
                      </div>
                      <div class="mb-3">
                        <label>
                          Roll No:<br></br>
                          <input
                            type="number"
                            name="rollno"
                            ref={rollno}
                          />
                        </label>
                      </div>
                      <div class="mb-3">
                        <label>
                          Marks:<br></br>
                          <input type="number" ref={marks} name="marks" />
                        </label>
                      </div>
                      <hr></hr>
                      <button
                        type="submit"
                        onClick={onsubmit}
                        class="btn btn-primary"
                      >
                        Add
                      </button>
                    </form>
                    <br></br>
                  </div>
                )}
                <br></br>
                <input
                  id="a"
                  onChange={() => setCheck2(!check2)}
                  type="checkbox"
                />
                &nbsp;&nbsp;&nbsp;Modify<br></br>


                {check2 && (
                 <div>
                 <div>
                   <form method="POST">
                   <div class="mb-3">
                        <label>
                          Section:<br></br>
                          <input type="text" ref={coll} name="coll" />
                        </label>
                      </div>
                     <div class="mb-3">
                       <label>
                         Name: <br></br>
                         <input type="text" name="name" ref={name} />
                       </label>
                     </div>
                     <div class="mb-3">
                       <label>
                         New Name: <br></br>
                         <input type="text" name="nname" ref={nname} />
                       </label>
                     </div>
                     <br></br>
                     <button
                       type="submit"
                       onClick={change2}
                       class="btn btn-primary"
                     >
                       Update Name
                     </button>
                     <br></br>
                   </form>
                 </div>
                 <br></br>
               </div>
               
            )} <br></br>
               
                <input
                  id="a"
                  onChange={() => setCheck3(!check3)}
                  type="checkbox"
                />
                &nbsp;&nbsp;&nbsp;Delete <br></br>
                {check3 && (
                  <div>
                    <form method="POST">
                    <div class="mb-3">
                        <label>
                          Section:<br></br>
                          <input type="text" ref={coll} name="coll" />
                        </label>
                      </div>
                      <div class="mb-3">
                        <label>
                          Name: <br></br>
                          <input type="text" name="name" ref={name} />
                        </label>
                      </div>
                      <button
                        type="submit"
                        onClick={change1}
                        class="btn btn-primary"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                )}
                <br></br>
                <button id="butn1" onClick={compare}>Compare</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatabaseOps;
