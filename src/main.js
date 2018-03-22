"use strict";

var Server = require("./server");
var db = require("./db");
var Seeder = require("./seeders/topics.js");
var group = require("./grouping/groupHelper.js");

// Load configuration
var config = require("./config");

console.log(`loaded configuration for ${config.env} from ${config.configDir}`);

// Connect to db
db.connect()
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch((err) => {
		console.error(`error connecting to MongoDB: ${err}`);
		process.exit();
	});

Seeder.seedTopics();

//
var server = new Server();
server.start()
	.then(() => {
		console.log(`listening on port ${config.port}`);
	})
	.catch((err) => {
		console.error(`error starting server: ${err}`);
		process.exit();
	});
