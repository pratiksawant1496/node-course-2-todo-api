

var express = require('express');
var bodyParser = require('body-parser');

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

app.listen(3000,() => {
  console.log('started on port 3000');
});


module.exports = {app};
