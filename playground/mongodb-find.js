//install mongodb through cmd using npm install mongodb then ....

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {

  if (err) {
  return  console.log('unable to connect to the mongodb server');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp');
  //
  // db.collection('Todos').find({
  //     _id:new ObjectID('5cfb5b7e691c2e0e3410b343')
  //     }).toArray().then((docs) => {                       //toArray converts your docs to array & it returns a promise
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('unable to fetch todos');
  // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count:${count}`);
    // },(err) => {
    //   console.log('unable to fetch todos',err);
    // });

    db.collection('Users').find({name:'Pratik'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
      console.log('unable to fetch todos',err);
    });

  //client.close();

});
