"use strict";

var helpers = "../helpers";
var Room = require("../../models/room");

var URL = "/api/users/join";

/**
 * Endpoint handler for createForRoom endpoint.
 */
function handle(req, res) {
	if (!helpers.request.requireBodyFields(req, res, 
		["room_id", "name", "year", "major"])) {

		return;
	}

	// TODO: Ensure room exists
	var roomId = req.body.room_id;
	/*
	Room.findOne({"_id": roomId})
		.then((room) => {
			// If exists
			if (room !== null) {
				return Promise.resolve();
			} else {
				throw {msg: `room with id ${roomId} does not exist`, 
					status: 404}
			}
		})
		.catch((err) => {
			throw `error checking for room with provided id: ${err}`;
		});
	*/

	// TODO: Insert user
}

/**
 * Adds all Model method endpoint handlers to the Express app
 * @param {ExpressJS App} app Express app to add handlers to
 */
function register(app) {
	app.post(URL, handle);
}

module.exports = {
	register: register
};
