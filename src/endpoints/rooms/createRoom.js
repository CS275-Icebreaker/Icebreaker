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
	var owner_id = req.body.ownerId;
	var newroom = new Room({name: name}); 
	var promise = newroom.save()
	.then((room) => {
		var val = Math.floor(1000 + Math.random() * 9000);
		var q = val.toString(); 
		return Promise.resolve({
			name: name, 
			code: q, 
			group_num: 1, 
			owner_id: owner_id
		});
	})
	.catch((err) => {
		throw 'error: could not create room';
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
