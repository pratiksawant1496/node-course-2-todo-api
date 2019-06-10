
//Mongoose Confg
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;                            //Using built in promise library
mongoose.connect('mongodb://localhost:27017/TodoApp');          //connecting to the database

module.exports = {mongoose};                        //exporting the mongoose var
