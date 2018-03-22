"use strict";

var mongoose = require("mongoose");

var hash = require("../../auth/hash");
var helpers = require("../helpers");
var Token = require("../../auth/token");
var Room = require("../../models/room");
var User = require("../../models/user");

var URL = "/api/users/join";

/**
 * Endpoint handler for createForRoom endpoint.
 */
function handle(req, res) {
	if (!helpers.request.requireBodyFields(req, res, 
		["room_id", "name", "year", "major"])) {

		return;
	}

	// Ensure room with provided id exists
	var roomId = req.body.room_id;
	var promise = Room.findById(roomId)
	.then((room) => {
		// If exists
		if (room !== null) {
			return Promise.resolve();
		} else {
			throw {msg: `room with id ${roomId} does not exist`, 
				status: 404};
		}
	})
	.catch((err) => {
		throw `error checking for room with provided id, `+
			`id: ${roomId}, err: ${err.msg}`;
	})
	.then(() => {
		var state = {};

		// Create auth token for user
		var token = new Token();
		state.token = token;

		// Get hash of auth token
		state.token = token;

		return hash.Hash(token.value)
			.then((hashStr) => {
				state.hash = hashStr;
				return Promise.resolve(state);
			});
	})
	.then((state) => {
		// Create user in room
		var user = new User({
			name: req.body.name,
			year: req.body.year,
			major: req.body.major,
			topics: [],
			auth_token_hash: state.hash
		});
		state.user = user;

		// Save user
		return user.save()
			.then(() => {
				return Promise.resolve(state);
			})
			.catch((err) => {
				throw `error saving user: ${err}`
			});
	})
	.then((state) => {
		return Promise.resolve({
			user: state.user.public(),
			auth_token: state.token.value
		});
	});

	helpers.response.sendPromise(res, promise);
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
