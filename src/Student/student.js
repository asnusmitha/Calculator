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

const Post = mongoose.model('a_sec',sec);

async function getData(){
    const data = [{
          "id": 1,
          "name": "Susmitha",
          "rollno":1,
          "marks": 98,
        },
        {
            "id": 2,
            "name": "Chandu",
            "rollno":2,
            "marks": 80,
          },
          {
            "id": 3,
            "name": "Raju",
            "rollno":3,
            "marks": 90,
          },
          {
            "id": 4,
            "name": "Sai",
            "rollno":4,
            "marks": 78,
          },
          {
            "id": 5,
            "name": "Viswa",
            "rollno":5,
            "marks": 67,
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