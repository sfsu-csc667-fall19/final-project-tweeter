// Some useful functions for authenticating requests
const redis = require("redis");
const mongo = require("mongodb");

const redisClient = redis.createClient();
const mongoClient = mongo.mongoClient;

// Verifies a username and password
// Checks redis first.
const authenticateUser = (username, password, callback) => {
    redisClient.get(`login_${username}`, (err, rep) => {
        if (err) {
            // We should check the database now (we didn't find the key)
            mongoClient.connect(DATABASE_URL, (err, db) => {
                if (err) {
                    callback(false);
                    return;
                }

                var dbo = db.db(DB_NAME);

                // Count the number of records with these details
                dbo.collection(USER_TABLE).find(params).count((err, res) => {
                    // Make sure that only one record exists
                    callback(res === 1);
                });
            });
        } else {
            // We've found a record in redis, let's check the password
            callback(rep === password);
        }
    });
}

// Registers a new account with a specified username and password
// Checks redis & db first
const registerAccount = (username, password, callback) => {
    redisClient.get(`login_${username}`, (err, rep) => {
        // We want this to error because we don't want the record to exist
        if (err) {
            // Account doesn't exist, let's check the database
            mongoClient.connect(DATABASE_URL, (err, db) => {
                if (err) {
                    callback(false);
                    return;
                }

                var dbo = db.db(DB_NAME);

                // Check the database
                dbo.collection(USER_TABLE).find(params).count((err, res) => {
                    if (res != 0) {
                        callback(false);
                        return;
                    }

                    // Account doesn't exist, so we can safely create it
                    
                })
            });
        } else {
            // We don't care about what it retrieved, just error
            callback(false);
        }
    });
}

module.exports = {
    authenticateUser: authenticateUser,
};