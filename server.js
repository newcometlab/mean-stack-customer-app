var express = require("express");
var morgan = require("morgan");

var app = express();
var port = process.env.PORT || 8080;

app.use(morgan("dev"));

app.get("/home", (req, res) => {
    res.send("Hello from HOME");
});

app.listen(port, () => {
    console.log("Running server in dev mode on port "+ port +"...")
});