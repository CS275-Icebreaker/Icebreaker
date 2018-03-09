"use strict";

// App configuration
const config = require("./config");

// MongoDB setup
const mongoose = require("mongoose");
mongoose.connect(config.mongoURI)
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch((err) => {
		console.error(`error connecting to MongoDB: ${err}`);
	});

// Express setup
const express = require("express");
const app = express();

app.use(express.static(config.staticDir));

// Listen
app.listen(config.port, () => {
	console.log(`listening on port ${config.port}`);
});
