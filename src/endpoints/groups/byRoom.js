"use strict";

var Group = require("../../models/group.js");
var helpers = require("../helpers");

var URL = "/api/groups/room/:room_id";

function handle(req, res) {
	var promise = Group.find({"room_id": req.params.room_id})
	.then((groups) => {
		return Promise.resolve({groups: room});
	})
	.catch((err) => {
		throw `error finding room with id: ${err}`;
	});
	
	helpers.response.sendPromise(promise);
}


function register(app) {
	app.get(URL, handle);
}

module.exports = {
	register: register
};