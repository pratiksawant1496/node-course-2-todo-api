
var mongoose = require('mongoose');

var User = mongoose.model('User',{                    //creating the Model by specifying the attributes
  email:{
    type:String,
    required:true,                   //validators use
    minlength:1,              //custom validators
    trim:true                 //will remove whitespaces
  }
});


module.exports = {User};
