"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var config = require("../config");
var endpoints = require("../endpoints");

/**
 * HTTP server.
 *
 * @property {ExpressJS App} app ExpressJs app
 */
class Server {
	constructor() {
		// Configure express server
		this.app = express();

		this.app.use(express.static(config.staticDir));

		this.app.use(bodyParser.json());

		// Register endpoints
		endpoints.register(this.app);
	}

	/**
	 * Starts the HTTP server
	 * @returns {Promise} Resolves when server has started. Rejects with 
	 * 		      an error.
	 */
	async start() {
		return new Promise(this._start.bind(this));
	}

	/**
	 * Called by the start() method. Does the actual work.
	 * @param {Function} resolve Promise resolve function
	 * @param {Function} reject Promise reject function
	 */
	_start(resolve, reject) {
		// Start express server
		this.app.listen(config.port, () => {
			resolve();
		});
	}
}

module.exports = Server;
