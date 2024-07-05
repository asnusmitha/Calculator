// const mongodb = require("mongodb").MongoClient;
import mongodb from 'mongodb';
// const express = require("express");
import express from 'express';
// const cors = require("cors");
import cors from 'cors';
const app = express();
app.use(cors());

app.get("/Products", (req, res) => {
  mongodb.connect("mongodb://localhost:27017", (err, connection) => {
    if (err) throw err;
    const db = connection.db("api");
    const pizzaColl = db.collection("posts");
    pizzaColl.find({}).toArray((err, document) => {
      if (err) throw err;
      res.send(document);
    });
  });
});
app.listen(3030, () => console.log("Server listening!!!"));