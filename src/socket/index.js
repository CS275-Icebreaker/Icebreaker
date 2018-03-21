"use strict";

var http = require("http");
var Socket = require("socket.io");

/**
 * Registers web socket handlers with the Express app
 * @param {HTTP Server} server HTTP server to register handlers with
 * @returns {Socket IO Server}
 */
function register(server) {
	var io = Socket.listen(server)

	io.on("connection", (socket) => {
		socket.on("join", (data) => {
			socket.join(data);
			socket.emit("join-ack", data);
		});
	});

	console.log("listening for websocket connections");

	return io;
}

module.exports = {
	register: register
};
