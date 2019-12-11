const KafkaConsumer = require('./KafkaConsumer');
const consumer = new KafkaConsumer(['myTopic', 'myOtherTopic']);

// database
const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017'; 

//Database name
const dbName = 'tweeter';
const client = new MongoClient(url);

client.connect((err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  // kafka
  consumer.on('message', (message) => {
    console.log(message.value);
    db.collection('kafkaTweet')
      .insertMany([
        { 
          _id: ObjectID(Date.now()),
          message: message.value //JSON later with post?
        }
      ]);
    });
});
consumer.connect();

