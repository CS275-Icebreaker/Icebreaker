"use strict";

// Express setup
const express = require("express");
const app = express();

var Group = require("../../models/group.js");
var helpers = require("../helpers");

var URL = "/api/groups/room/:roomid";

function handle(req, res) {
	var promise = Group.findById(req.params.room_id)
	.then((room) => {
		console.log(`room: ${room}`);
	})
	.catch((err) => {
		throw `error finding room with id: ${err}`;
	});
	
	helpers.response.sendPromise(promise);
}


function register(app) {
	app.post(URL, handle);
}

module.exports = {
	register: register
};