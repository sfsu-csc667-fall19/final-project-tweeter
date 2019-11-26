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
    // Create tweets
    app.use(bodyParser.json());
    app.post('/messages/postMessage', (req, res) => {
        console.log(req.body);
        db.collection('tweets').insertMany([{_id: ObjectID(Date.now()), data: req.body.message}])
          .then(() => console.log('success'))
          .catch((e) => console.log(e));
        client.publish('testPublish', req.body.message); 
        res.send('ok');
    });

    app.get('/messages/getMessage', (req, res) => {
        db.collection('tweets').find({}).toArray()
        .then((result) => {
            res.send(result.map(r => r.data));
        })
        .catch((e) => console.log(e));
    });

    app.get('/messages/updateMessage', (req, res) => {
        db.collection('tweets').updateOne({ _id: ObjectID(req.query.id) }, {$set: {data: req.body.message}})
            .then(() => console.log('success'))
            .catch((e) => console.log(e));
          client.publish('testPublish', req.body.message); 
    });

    app.get('/messages/deleteMessage', (req, res) => {
        db.collection('tweets').deleteOne({_id: ObjectID(req.query.id)})
            .then(() => console.log('success'))
            .catch((e) => console.log(e));
          res.redirect('/');
    });

    app.listen(5000);
});
