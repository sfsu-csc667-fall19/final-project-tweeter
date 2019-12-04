// NOT SURE IF THIS IS CORRECT BAKULIA

const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectID } = require('mongodb');
const redis = require('redis');
const client = redis.createClient({ host: process.env.REDIS_HOST || 'localhost' });
const app = express();

// mongo init
const url = process.env.MONGO_HOST || 'mongodb://localhost:27017';
const MongoClient = new MongoClient(url);

mongoClient.connect((err) => {
    if(err){
        console.log(err);
    }
    const db = mongoClient.db('tweeter');
    // direct chat
    app.get('/chat', (req, res) => {
        db.collection('mychat').find({}).toArray()
        .then((result) => {
            res.send(result.map(r => r.data));
        })
        .catch((e) => console.log(e));
    });

    app.use(bodyParser.json());
    app.post('/chat', (req, res) => {
        console.log(req.body);
        db.collection('mychat').insertMany([{_id: ObjectID(Date.now()), data: req.body.message}])
          .then(() => console.log('success'))
          .catch((e) => console.log(e));
    });
    app.listen(3004);
});