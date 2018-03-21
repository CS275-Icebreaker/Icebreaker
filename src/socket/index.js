"use strict";

var http = require("http");
var Socket = require("socket.io");

/**
 * Registers web socket handlers with the Express app
 * @param {HTTP Server} server HTTP server to register handlers with
 */
function register(server) {
	var io = Socket.listen(server)

	io.on("connection", (socket) => {
		socket.emit("grouped", "test");
	});

	console.log("listening for websocket connections");
}

module.exports = {
	register: register
};
