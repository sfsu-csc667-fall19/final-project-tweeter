const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const app = express();
const port = 4005;

var cors = require('cors')
 
app.use(cors())
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tweeter';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server

client.connect((err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Connected successfully to mongo");
  const db = client.db(dbName);
  app.get('/tweets/all', (req, res) => {
    db.collection('kafkaTweet')
      .find({})
      .toArray()
      .then((docs) => {
        console.log(docs)
        res.json(docs);
      })
      .catch((e) => {
        res.json({ status: 'error' });
      });
  });

  app.listen(port, () => console.log(`mongo-service is running on port ${port}!`));
});