import fetch from 'node-fetch';
import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/Products");

const sec=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

const Post = mongoose.model('data',sec);

async function getData(){
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    // console.log(response);

    for(let i=0;i<response.length;i++){

        const info= new Post({
            id:response[i]['id'],
            title:response[i]['title'],
            price:response[i]['price'],
            category:response[i]['category'],
            description:response[i]['description']
        
        });
        info.save();
    }

}

getData();