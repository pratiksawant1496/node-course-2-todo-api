//install mongodb through cmd using npm install mongodb then ....

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');               //object destructuring helps to pull out different  object like mongoclient from mongodb

//below TodoApp is a database is used without creating it which is imp feature of mongodb
//below in MongoClient.connect the first argument will be the URL where the your directry resides like AWS or Heroku
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {                    //client lets you to issue commands for reading & writing the data

  if (err) {
  return  console.log('unable to connect to the mongodb server');                      //return statement helps to prevent the rest of the fun from exedcuting
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');                  //to get the acces to the database reference

  // //Inserting some data

  // db.collection('Todos').insertOne({                    //writing the query
  //       text:'something',
  //       completed:true
  // },(err,result) => {
  //   if(err){
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));             //ops will store all of the docs that we are inserted
  // });
  //

        db.collection('Users').insertOne({
          name:'Pratik',
          age:24,
          location:'pune'
        },(err,result) => {
          if (err) {
            return console.log('unable to insert',err);
          }
          console.log(result.ops[0]._id.getTimestamp());             //getTimestamp will tell when the object was created
        });
  client.close();          //for closing the connection with server
});
