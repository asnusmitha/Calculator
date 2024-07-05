import fetch from 'node-fetch';
import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/StudentData");

const sec=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:Number,
        required:true
    },
    marks:{
        type:Number,
        required:true
    }
});

const Post = mongoose.model('b_sec',sec);

async function getData(){
    const data = [{
        "id": 6,
        "name": "Rishi",
        "rollno":1,
        "marks": 73,
      },
      {
        "id": 7,
        "name": "Arjun",
        "rollno":2,
        "marks": 50,
      },
      {
        "id": 8,
        "name": "Shekar",
        "rollno":3,
        "marks": 80,
      },
      {
        "id": 9,
        "name": "Janaki",
        "rollno":4,
        "marks": 88,
      },
      {
        "id": 10,
        "name": "Vijaya",
        "rollno":5,
        "marks": 55,
      },    
    ]
    // await fetch("https://random-data-api.com/api/users/random_user?size=10");
    // const response = await data.json;
    // console.log(response);

    for(let i=0;i<data.length;i++){

        const info= new Post({
            id:data[i]['id'],
            name:data[i]['name'],
            rollno:data[i]['rollno'],
            marks:data[i]['marks'],
        
        });
        info.save();
    }

}

getData();