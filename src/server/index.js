"use strict";

var http = require("http");

var express = require("express");
var bodyParser = require("body-parser");

var config = require("../config");
var endpoints = require("../endpoints");
var socket = require("../socket");

/**
 * HTTP server.
 *
 * @property {ExpressJS App} app ExpressJs app
 */
class Server {
	constructor() {
		// Configure express server
		this.app = express();

		// Make HTTP server from express server
		this.server = http.createServer(this.app);
		
		// Static HTML
		this.app.use(express.static(config.staticDir));
		this.app.use("/lib", express.static("./node_modules"));

		this.app.use(bodyParser.json());

		// Register endpoints
		endpoints.register(this.app);

		// Register websocket handlers
		socket.register(this.server);

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
		// Start http server
		this.server.listen(config.port);
		this.server.on("listening", () => {
			resolve();
		});
	}
}

module.exports = Server;
