// express
const express = require('express');
const app = express();
const port = 3005;

var cors = require('cors')
 
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());

// kafka
const KafkaProducer = require('./producer');
const producer = new KafkaProducer('myTopic');

producer.connect(() => {
  console.log('Connected to kafka!');
  app.post('/new_tweet', function(req, res) {
    console.log('Request body:', req.body);
    producer.send(req.body.text);
    res.send("OK!");
  })
});

// listen locally, change to the server with front end integration
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
