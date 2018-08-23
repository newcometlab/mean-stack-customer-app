var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var morgan = require("morgan");
var mongoose = require("mongoose");
var User = require("./app/models/user");
var bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/home", (error) => {
    if (error) {
        console.log("Not connected to database: "+error);
    } else {
        console.log("Successfully connected to MongoDB");
    }
});

app.get("/home", (req, res) => {
    res.send("Hello from HOME");
});

app.post("/users", (req, res) => {
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    if (req.body.username == null || req.body.username == ""
        || req.body.password == null || req.body.password == ""
        || req.body.email == null || req.body.email == "")
    {
        res.send("Validation Error: Please ensure that username, password and email have been provided")
    } else {
        user.save((error) => {
            if (error) {
                res.send("The system returned the following error: "+error);
            } else {
                res.send("User: "+ user +" successfully created");
            }
        });
    }
});

app.listen(port, () => {
    console.log("Running server in dev mode on port "+ port +"...")
});