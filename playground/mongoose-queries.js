
const {ObjectID} = require('mongodb');
const {mongoose} = require( './../server/db/mongoose');
const {Todo} = require( './../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5cfdf602729ae22a542b02c711';

// if (!ObjectID.isValid(id)) {                 //validating the id
//   console.log('Id not valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//       return console.log('Id not found');
//   }
//   console.log('Todo By id',todo);
// }).catch((e) => console.log(e));
