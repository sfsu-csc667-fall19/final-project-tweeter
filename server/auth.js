// Auth backend
// Checks credentials, etc.
//
// Information stored in the database in the following ways:
// login_<username> = <password>
// key_<username> = <login token>
const express = require("express");
const bodyParser = require("body-parser");
const authUtils = require("./misc/auth");

let port = 3001; // might need to be changed
const app = express();
app.use(bodyParser.json());

// Handles account logging in
app.post("/auth/login", (req, res) => {
    const requiredFields = ["username", "password"];
    for (let i = 0; i < requiredFields.length; i++) {
        if (req.body[requiredFields[i]] === null) {
            res.send({
                success: false,
                message: "Required fields not set."
            });
            return;
        }
    }
    // verify credentials
    authUtils.authenticateUser(req.body.username, req.body.password, (result) => {
        // If we need to register a token, we should do so here
        res.send({
            success: result
        });
    });
});

// Handles account registration
app.post("/auth/register", (req, res) => {
    const requiredFields = ["username", "first_name", "last_name", "password"];
    for (let i = 0; i < requiredFields.length; i++) {
        if (!(requiredFields[i] in req.body)) {
            res.send({
                success: false,
                message: "Required fields not set."
            });
            return;
        }
    }
    authUtils.registerAccount(req.body.username, req.body.password, req.body.first_name, req.body.last_name, (result) => {
        if (result) {
            res.send({
                success: true
            });
        } else {
            res.send({
                success: false,
                message: result
            });
        }
    });
});

app.post("/auth/profile", (req, res) => {
    const requiredFields = ["username"];
    if (!req.body) {
        res.send({
            success: false,
            message: "Required parameters not supplied."
        });
        return;
    }
    for (let i = 0; i < requiredFields.length; i++) {
        if (!(requiredFields[i] in req.body)) {
            res.send({
                success: false,
                message: "Required parameters not supplied. (username)"
            });
            return;
        }
    }

     // We've got all the parameters we need, now we can get to returning the data
    authUtils.fetchUserData(req.body.username, (result) => {
        if (result) {
            res.send({
                success: true,
                contents: {
                    username: result.username,
                    first_name: result.first_name,
                    last_name: result.last_name,
                }
            });
        } else {
            res.send({
                success: false,
                message: "Internal server error."
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Now listening on port localhost:${port}!`);
});