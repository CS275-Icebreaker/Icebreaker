"use strict";

var mongoose = require("mongoose");

var hash = require("../../auth/hash");
var helpers = require("../helpers");
var Token = require("../../auth/token");
var Room = require("../../models/room");
var User = require("../../models/user");

var URL = "/api/rooms";

/**
 * Endpoint handler for createForRoom endpoint.
 */
function handle(req, res) {
	if (!helpers.request.requireBodyFields(req, res, ["name"])) {
		return;
	}
	
	var name = req.body.name; 
  
    var newroom = new Room({
        name: name,
        code: Room.GenerateCode()
    }); 

	var promise = newroom.save()
		.then((room) => {
			return Promise.resolve(room);
		})
		.catch((err) => {
			throw `error could not create room: ${err}`;
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
