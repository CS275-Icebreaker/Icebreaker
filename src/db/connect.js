"use strict";

const mongoose = require("mongoose");

const config = require("../config");

/**
 * Connects to the MongoDB database
 * @returns {Promise} Resolves with nothing, rejects with error.
 */
async function connect() {
	return mongoose.connect(config.mongoURI);
}

module.exports = {
	connect: connect
};
