var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var router = express.Router();
var appRoutes = require("./app/routes/api")(router);
var path = require("path");

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/api", appRoutes);

// db connection
mongoose.connect("mongodb://localhost:27017/home", (error) => {
    if (error) {
        console.log("Not connected to database: "+error);
    } else {
        console.log("Successfully connected to MongoDB");
    }
});

// returning page to user
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/app/views/index.html"))
});

app.listen(port, () => {
    console.log("Running server in dev mode on port "+ port +"...")
});