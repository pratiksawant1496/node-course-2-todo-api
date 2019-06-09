//install mongodb through cmd using npm install mongodb then ....

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {

  if (err) {
  return  console.log('unable to connect to the mongodb server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');

 //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5cfd135cdee3f2419f2fbc06')
  // },{
  //   $set:{                                                     //using the update operators like $set
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5cfb5c8da4ade017dcd5fcdc')
  },{
    $set:{                                                     //using the update operators like $set
      name:'pratik'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  });
  //client.close();

});
