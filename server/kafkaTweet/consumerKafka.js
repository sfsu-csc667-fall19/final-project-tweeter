const KafkaConsumer = require('./consumer');
const WebSocket = require("ws");
const consumer = new KafkaConsumer(['myTopic', 'myOtherTopic']);
const websocket_port = 6001;

// Create the websocket connection
const wss = new WebSocket.Server({port: websocket_port});

// A new client connected
wss.on("connection", () => {
    console.log("A new client has connected!");
});

// database
const {MongoClient, ObjectID} = require('mongodb');
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
        let data = JSON.parse(message.value);
        db.collection('kafkaTweet')
            .insertMany([
                {
                    _id: ObjectID(Date.now()),
                    message: data.text //JSON later with post?
                }
            ], function (err) {
                // err? message.json({status: "error"}) : message.json({status: "success"});
                console.log(err)
            });

        // Now that we've inserted the record, we should push it out to clients via websocket
        wss.clients.forEach((wclient) => {
            wclient.send(JSON.stringify({
                type: "NEW_TWEET",
                content: data
            }));
        });
    });
});
consumer.connect();

