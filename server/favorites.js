// RAW CODE NEED TO BE DEVELOPED
const express = require('express');
const router = require('router');

const { MongoClient, ObjectID } = require('mongodb');
const app = express();
const port = 3002;
app.use(express.urlencoded());
app.use(express.json());

const url = 'mongodb://localhost:27017';

const dbName = 'tweeter';

const client = new MongoClient(url);

client.connect( (err) => {
    if(err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Connected to db');
    const db = client.db(dbName);

    app.get('/user/favorites', (req, res) => {
        db.collection('favorites')
        .insertOne([
            {
                username: 'userTest',
                tweets: ['tweet1', 'tweet2', 'tweet3'],
            }
        ], function(err, result) {
            if(err) {
                res.json({ status: 'error' });
            } else {
                res.json({ status: 'success' });
            }
        })
    })

})

app.use('/', router);
app.listen(port, () => console.log(`listening on port ${port}`));


// Create favorite
exports.create = (req, res) => {
    const tweet = req.tweet;
    tweet.favorites = req.user;
    tweet.save(err => {
        if(err) {
            return res.send(400);
        }
        res.send(201, {}); //result of HTTP POST request
    });
};

// Delete favorite
exports.destroy = (req, res) => {
    const tweet = req.tweet;
    tweet.favorites = req.user;
    tweet.save(err => {
        if(err) {
            return res.send(400);
        }
        res.send(200); 
    });
};

