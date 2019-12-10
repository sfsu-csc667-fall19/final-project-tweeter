const express = require('express');
const router = require('router');
const session = require("express-session");

const { MongoClient, ObjectID } = require('mongodb');
const app = express();
const port = 4000;
app.use(express.urlencoded());
app.use(express.json());

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tweeter';

// Create a new MongoClient
const client = new MongoClient(url);

client.connect((err) => {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Successfully connected to server");
    const db = client.db(dbName);

    app.post('/profile/login', (req, res) => {
        db.collection('users')
        .find({username: releaseEvents.body.username })
        .toArray()
        .then((docs) => {
            if(docs.length < 0 || docs[0].password !== req.body.password){
                res.json({ status: 'error'})
            }else{
                res.json({status: 'success', username: docs[0].username});
            }
        })
        .catch((e) => {
            res.json({ status: 'error' });
        });
    });

    app.post('/profile/register', (req, res) => {
        db.collection('users')
        .insertMany([
            {username: req.body.username, password: req.body.password}
        ], function(err, result) {
            if(err){
                res.json({ status: "error"});
            }else{
                res.json({ status: "success" });
            }
        });
    });
    // this is the function that is going to log out the user 
    app.get('/profile/logout', (req, res) => {
        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            res.redirect('/');
        });
    });

    app.use('/', router);
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});