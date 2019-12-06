// Auth backend
// Checks credentials, etc.
//
// Information stored in the database in the following ways:
// login_<username> = <password>
// key_<username> = <login token>
const express = require("express");
const authUtils = require("./misc/auth");

let port = 3001; // might need to be changed
const app = express();

// Handles account logging in
app.post("/auth/login", (req, res) => {
    if (req.body.username && req.body.password) {
        // verify credentials
        authUtils.authenticateUser(req.body.username, req.body.password, (result) => {
            // If we need to register a token, we should do so here
            res.send({
                success: result
            });
        });
    } else {
        res.send({
            success: false,
            message: "Username and password not specified."
        });
    }
});

// Handles account registration
app.post("/auth/register", (req, res) => {
    if (req.body.username && req.body.password) {
        authUtils.registerAccount(req.body.username, req.body.password, (result) => {
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
    } else {
        res.send({
            success: false,
            message: "Username and password not specified."
        });
    }
});

app.listen(port, () => {
    console.log(`Now listening on port localhost:${port}!`);
});