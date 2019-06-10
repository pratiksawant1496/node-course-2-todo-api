
var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{                    //creating the Model by specifying the attributes
  text:{
    type:String,
    required:true,                   //validators use
    minlength:1,              //custom validators
    trim:true                 //will remove whitespaces
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

module.exports = {Todo};           //exporting the model
