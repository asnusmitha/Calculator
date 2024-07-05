import React, { useEffect,useState } from 'react';
import apicss from './apicss.css';
function Fakeapi() {
    const [jew,setJew]=useState([]);
    const getData=()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setJew(json))
        }
            useEffect(()=>{
                getData()
              },[])

        return(
            <div>
          <div class="container">
              <div class="row">
                  {jew.map((data,id)=>
                  <div class="card" id="card">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="row">
                        <b id="name">{data.title}</b><br></br>
                        <b id="price">{data.price}</b>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <p>{data.description}</p>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="row">
                        <img class="img" src={data.image}></img>
                      </div>
                    </div>
                  </div>
                  </div>
    
    
                      
                  )}
                  
              </div>
          </div>
      </div>
        )
}
     

export default Fakeapi;