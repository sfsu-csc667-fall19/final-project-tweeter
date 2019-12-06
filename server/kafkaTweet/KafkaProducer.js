// express
const express = require('express');
const app = express();
const moment = require('moment-timezone')
const timestamp = moment().unix();

// kafka
const kafka = require('kafka-node');
const Client = kafka.KafkaClient;
const HighLevelProducer = kafka.HighLevelProducer;

// express set up
app.listen(process.env.PORT || 3001);
// app.post('/', function(req, res){
    

//     //send data to kafka
//     const message = { topic: this.topic,
//                       messages: [JSON.stringify(message)]
// }
// })


// MongoDB set up
const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tweeter';

class KafkaProducer {
    constructor(topic) {
        this.topic = topic;
        this.producer = null;
    }

    connect(callback) {
        const client = new Client();
        this.producer = new HighLevelProducer(client);
        callback();
    }

    send(message){
        if(!this.producer){
            return;
        }
        this.producer.send([
            {
                topic: this.topic,
                messages: [JSON.stringify(message)],
            }
        ],
            (err) => {
                if(err) {
                    console.log('Error sent from kafka producer!');
                    console.log(err);
                }
            }
        );
    }
}
module.exports = KafkaProducer;