const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

var todo = []

app.get("/todos", (req,res) => {
  res.json(todo)
})

app.get("/todos/:id", (req,res) => {
  let idIndex = todo.findIndex(elem => elem.id === parseInt(req.params.id))
  if(idIndex === -1){
    res.status(404).json("Not Found")
  }

  res.status(200).json(todo[idIndex])
})

app.post("/todos", (req,res) => {
  let newTodo = {
    title: req.body.title,
    id: Math.floor(Math.random()*1000),
    completed: req.body.completed,
    description: req.body.description
  }

  todo.push(newTodo)
  res.status(201).json(newTodo)
})

app.put("/todos/:id", (req,res) => {
  let idIndex = todo.findIndex(elem => elem.id === parseInt(req.params.id))

  if(idIndex === -1){
    res.status(404).json("Not Found")
  }else {
    todo[idIndex].title = req.body.title
    todo[idIndex].completed = req.body.completed
    todo[idIndex].description = req.body.description
  
    res.status(200).json(todo[idIndex])
  }
})

app.delete("/todos/:id",(req,res) => {
  let idIndex = todo.findIndex(elem => elem.id === parseInt(req.params.id))

  if(idIndex === -1){
    res.status(404).json("Not Found")
  }else {
    todo.splice(idIndex,1)
    res.status(200).json("done")
  }
})

app.use((req,res) => {
  res.status(404).send();
})

app.listen(3000)

//module.exports = app;