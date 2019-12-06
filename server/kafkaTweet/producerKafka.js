// express
const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded());
app.use(express.json());

// kafka
const KafkaProducer = require('./KafkaProducer.js');
const producer = new KafkaProducer('myTopic');

producer.connect(() => {
  console.log('Connected to kafka!');
  app.get('/new_tweet', function(req, res) {
    console.log('Test request!');
    producer.send(req.query.text);
    res.send("OK!");
  })
});

// listen locally, change to the server with front end integration
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
