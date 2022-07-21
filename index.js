//import mongo tools / library
const { MongoClient, ServerApiVersion } = require('mongodb');

//connect to Mongo/Atlas USING a URL connecting String
const { uri } = require('./dbsecrets.js')  //there is a secret file

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1 });

// connect to sample_mflix database
const db = client.db('sample_mflix');
``
// query

// let's get a specific movie from the "movies" collection

//search by title for "Back to the future"

db.collection('movies')
  .findOne({ title: "Back to the Future"}, (err, results) => {
    // let's output the results:
    if(err) {
    console.error(err)
    }
    console.log(results);
    client.close()
  });