// Some useful functions for authenticating requests
const redis = require("redis");
const mongo = require("mongodb");

const DATABASE_URL = "mongodb://localhost:27017";
const DB_NAME = "tweeter";
const USER_TABLE = "accounts";
const redisClient = redis.createClient();
const mongoClient = mongo.MongoClient;

// Verifies a username and password
// Checks redis first.
const authenticateUser = (username, password, callback) => {
    redisClient.get(`login_${username}`, (err, rep) => {
        if (rep === null) {
            // We should check the database now (we didn't find the key)
            mongoClient.connect(DATABASE_URL, (err, db) => {
                if (err) {
                    callback(false);
                    return;
                }

                var dbo = db.db(DB_NAME);

                // We want to check for the specific parameters:
                let params = {
                    username: username,
                    password: password,
                };

                // Count the number of records with these details
                dbo.collection(USER_TABLE).find(params).count((err, res) => {
                    // Make sure that only one record exists
                    callback(res === 1);
                });
            });
        } else if (!err) {
            // We've found a record in redis, let's check the password
            callback(rep === password);
        } else {
            callback(false);
        }
    });
}

// Registers a new account with a specified username and password
// Checks redis & db first
const registerAccount = (username, password, firstName, lastName, callback) => {
    redisClient.get(`login_${username}`, (err, rep) => {
        // We want this to be null because we don't want the record to exist
        if (rep === null) {
            // Account doesn't exist, let's check the database
            mongoClient.connect(DATABASE_URL, (err, db) => {
                if (err) {
                    callback(false);
                    return;
                }

                var dbo = db.db(DB_NAME);

                // We just want to check for the username
                let params = {
                    username: username,
                };

                // Check the database
                dbo.collection(USER_TABLE).find(params).count((err, res) => {
                    if (res != 0) {
                        callback(false);
                        return;
                    }

                    let data = {
                        username: username,
                        password: password,
                        first_name: firstName,
                        last_name: lastName,
                    };
                    // Account doesn't exist, so we can safely create it
                    dbo.collection(USER_TABLE).insertOne(data, (err, result) => {
                        if (err) {
                            callback(false);
                        } else {
                            // We should register the new account with redis, too
                            redisClient.set(`login_${username}`, password, (err, reply) => {
                                // We don't care about whether or not we actually set it in redis, because we set it in the database either way
                                callback(true);
                            });
                        }
                    });
                })
            });
        } else {
            // We don't care about what it retrieved, just error
            callback(false);
        }
    });
}

// Fetches the information for a specified user
const fetchUserData = (username, callback) => {
    // Skip reading redis, we need info from the database
    mongoClient.connect(DATABASE_URL, (err, db) => {
        if (err) {
            callback(false);
        } else {
            let dbo = db.db(DB_NAME);
            let params = {username: username};

            dbo.collection(USER_TABLE).find(params).toArray((err, res) => {
                if (err) {
                    callback(false);
                } else {
                    if (res.length === 1) {
                        callback(res[0]);
                    } else {
                        callback(false);
                    }
                }
            });
        }
    });
}

module.exports = {
    authenticateUser: authenticateUser,
    registerAccount: registerAccount,
    fetchUserData: fetchUserData,
};