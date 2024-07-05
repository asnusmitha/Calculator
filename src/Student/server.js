const mongodb=require('mongodb').MongoClient;
const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
// const url="mongodb://localhost:27017";
app.get("/asec", (req, res) => {
  mongodb.connect("mongodb://127.0.0.1:27017")
    .then((conn) => {
      const db = conn.db("StudentData");
      const coll = db.collection("a_secs");
      return coll.find({}).toArray();
    })
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      throw err;
    });
});

app.get("/bsec", (req, res) => {
  mongodb.connect("mongodb://127.0.0.1:27017")
    .then((conn) => {
      const db = conn.db("StudentData");
      const coll = db.collection("b_secs");
      return coll.find({}).toArray();
    })
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      throw err;
    });
});

app.post('/addstu',(req,res) => {
  mongodb.connect("mongodb://127.0.0.1:27017")
    .then((conn) => {
      const db = conn.db("StudentData");
      const coll = db.collection(req.body.coll);
      return coll.insertOne({
        ...req.body,
      });
    })
    .catch((err) => {
      throw err;
    });
  console.log(req.body)
  res.status(200).send("Product Added")
})

app.post('/remstu',(req,res) => {
  mongodb.connect("mongodb://127.0.0.1:27017")
    .then((conn) => {
      const db = conn.db("StudentData");
      const coll = db.collection(req.body.coll);
      return coll.deleteOne({...req.body
      });
    })
    .catch((err) => {
      throw err;
    });
  console.log(req.body)
  res.status(200).send("Product Added")
})

app.post('/updatestu',(req,res) => {
  mongodb.connect("mongodb://127.0.0.1:27017")
    .then((conn) => {
      const db = conn.db("StudentData");
      const coll = db.collection(req.body.coll);
      coll.updateOne({name:req.body.name},{$set:{name:req.body.nname}}
      );
    })
    .catch((err) => {
      throw err;
    });
  console.log(req.body)
  res.status(200).send("Product Added")
})
app.listen(5090,()=>{
    console.log("connected successfully");
  })