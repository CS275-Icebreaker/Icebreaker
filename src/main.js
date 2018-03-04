"use strict";

// App configuration
const config = require("./config");

// MongoDB setup
const mongoose = require("mongoose");
mongoose.connect(config.mongoURI);

// Express setup
const express = require("express");
const app = express();

app.use(express.static(config.staticDir));

//Include Room module
var room = require("./room"); 

// Endpoints
app.get("/api/test", (req, res) => {
	res.send({status: "ok"});
});

//Creating room endpoint
app.get("/api/creroom", (req, res) => {
    //key is the data that will be queried from the ajax call
    var code = req.query.key; 
    var newroom = 

});

//Deleting room endpoint
app.get("/api/delroom", (req, res) => {

});

//Find short code room endpoint
app.get("/api/shortcode", (req, res) => {

}); 

//Get room info endpoint
app.get("/api/roominfo", (req, res) => {

}); 

// Listen
app.listen(config.port, () => {
	console.log(`listening on port ${config.port}`);
	console.log(`    navigate to localhost:${config.port} for development`);
});
