"use strict";

var config = require("./config");
var db = require("./db");

var Server = require("./server");

// Connect to db
db.connect()
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch((err) => {
		console.error(`error connecting to MongoDB: ${err}`);
	});

// Listen
var server = new Server();
server.start()
	.then(() => {
		console.log(`listening on port ${config.port}`);
	})
	.catch((err) => {
		console.error(`error starting server: ${err}`);
	});
