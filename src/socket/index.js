"use strict";

var http = require("http");
var Socket = require("socket.io");

/**
 * Registers web socket handlers with the Express app
 * @param {Express App} app Express app to register handlers with
 */
function register(app) {
	var server = http(app);
	var io = Socket(server)

	io.on("connection", (socket) => {
		console.log("socket client connected");
	});
}
