import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
const LineChart = () => {
const [astu, setAStu]=useState([])
    const [bstu, setBStu]=useState([])
const [labels, setLabels]=useState([])


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

for (let index = 0; index < astu.length; index++) {
    if(index===astu.length){
        break
    }
    else{
    const e=astu[index].name;
    setLabels([...labels,e]);
    }
}
console.log(labels)
const data = {
    
  labels: astu.name,
  datasets: [
    {
      label: "Students",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};


  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;