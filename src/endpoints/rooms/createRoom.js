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
	var val = Math.floor(1000 + Math.random() * 9000);
	var q = val.toString();
	var newroom = new Room({name: name, code: q, group_num: 0, stage: "???", owner_id: owner_id}); 
	var promise = newroom.save()
	.then((room) => { 
		return Promise.resolve({name: name, code: q, group_num: 0, stage: "???", owner_id: owner_id});
		//--if line 28 doesn't work, use this
		//return Promise.resolve(newroom); 
		//--old code
		//return Promise.resolve({name: name, code: q, group_num: 0, stage: "???", owner_id: owner_id});
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
