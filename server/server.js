

var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');           //using destructuring fetching the mongoose var\
var {Todo} =require('./models/todo');
var {User} = require('./models/user');

//setting up the express app
var app =express();

app.use(bodyParser.json());             //middleware
app.post('/todos',(req,res) => {
  var todo = new Todo({
    text:req.body.text
  }) ;
  todo.save().then((doc) => {
    res.send(doc);
  },(err) => {
    res.status(400).send(err);
  });
});

app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  })
});

//GET /todos/1234124
app.get('/todos/:id',(req,res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
      return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });

});


app.listen(3000,() => {
  console.log('started on port 3000');
});


module.exports = {app};
