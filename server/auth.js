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
app.get("/auth/login", (req, res) => {
    if (req.query.username && req.query.password) {
        // verify credentials
        authUtils.authenticateUser(req.query.username, req.query.password, (result) => {
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
app.get("/auth/register", (req, res) => {
    if (req.query.username && req.query.password) {
        authUtils.registerAccount(req.query.username, req.query.password, (result) => {
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