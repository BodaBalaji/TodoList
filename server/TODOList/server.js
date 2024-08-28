const express=require("express");
const cors=require("cors");
const {MongoClient}=require("mongodb");
const { json } = require("body-parser");
const app=express();
app.use(cors());
app.use(express.json());
const Todo = new MongoClient("mongodb+srv://bodabalaji2000:Admin@cluster0.m1ljbab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const db = Todo.db('TODOLIST');

app.get('/getall', async (req, res) => {
  const todos = await db.collection('list').find().toArray();
  res.json(todos);
});

app.post('/add', async (req, res) => {
  const { title, description } = req.body;
  const todo = await db.collection('list').insertOne({ title, description, date: new Date() });
  res.json(todo);
});

app.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  await db.collection('todos').updateOne({ _id: new ObjectId(id) }, { $set: { title, description } });
  res.json({ message: 'Updated successfully' });
});

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await db.collection('list').deleteOne(query);
  res.json({ message: 'Deleted successfully' });
});

app.listen(3030, () => {
  console.log('Server listening on port 3030');
});

































// const express=require("express");
// const cors=require("cors");
// const {MongoClient}=require("mongodb");
// const { json } = require("body-parser");
// const app=express();
// app.use(cors());
// app.use(express.json());
// const Todo = new MongoClient("mongodb+srv://bodabalaji2000:Admin@cluster0.m1ljbab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
// //post
// app.post("/add",async(req,res)=>{
//      await Todo.connect();
//      const {Title, Description }=req.body;
//      const result=await Todo.db("TODOLIST").collection("list").insertOne({Title,Description});
//      if(result){
//          res.json({"add":"success"})
//      }else{
//          res.json({"add":"fail"})
//      }
//  }); 

//  //Get 
// app.get("/getall",async(req,res)=>{
//     await Todo.connect();
//     let arr=await Todo.db("TODOLIST").collection("list").find().toArray();
//     res.json(arr);
// })

// app.get("/getone", async (req, res) => {
//   try {
//     await Todo.connect();
//     let doc = await Todo.db("TODOLIST").collection("list").findOne();
//     res.json(doc);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" });
// }
// });

// //Update
// app.put("/update/:id", async (req, res) => {
//   try {
//     await Todo.connect();
//     let _id = (req.params._id);
//     let updateData = req.body;
//     let result = await Todo.db("TODOLIST").collection("list").updateOne({ _id: new ObjectId(id) }, { $set: updateData });
//     res.json({ message: "Updated successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// //Delete
// app.delete("/delete/:id", async (req, res) => {
//   try {
//     await Todo.connect();
//     let _id = (req.params._id);
//     let result = await Todo.db("TODOLIST").collection("list").deleteOne({ _id: new ObjectId(id) });
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

//  app.listen(8000,()=>{
//     console.log("server listening to port :8000")
// });





















// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// app.use(express.json());
// mongoose.connect("mongodb+srv://bodabalaji2000:Admin@cluster0.m1ljbab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });

// const Todo = mongoose.model('Todo', {
//   title: String,
//   description: String,
//   date: Date,
// });

// app.post('/post', (req, res) => {
//   const todo = new Todo(req.body);
//   todo.save((err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.send(data);
//     }
//   });
// });
// app.get('/getall', (req, res) => {
//     const page = req.query.page || 1;
//     const limit = req.query.limit || 10;
//     Todo.find()
//       .skip((page - 1) * limit)
//       .limit(limit)
//   .then((data) => res.send(data))
//   .catch((err) => res.status(500).send(err));
// });

// app.get('/getall/:id', (req, res) => {
// Todo.findById((link unavailable))
//   .then((data) => res.send(data))
//   .catch((err) => res.status(404).send(err));
// });

// app.patch('/api/todos/:id', (req, res) => {
// Todo.findByIdAndUpdate((link unavailable), req.body, { new: true })
//   .then((data) => res.send(data))
//   .catch((err) => res.status(404).send(err));
// });

// app.listen(8000, () => {
// console.log('Server started on port 8000');
// });


  
