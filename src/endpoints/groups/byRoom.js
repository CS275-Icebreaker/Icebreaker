// Express setup
const express = require("express");
const app = express();

const Group = require("../../models/group.js");

function getGroupsByRoom(req, res) {
	var query = Group.find({ 'room_id': req.params.room_id });
	query.exec(function (err, groups) {
		if (err) return handleError(err);
		console.log(groups);
	}
}

module.exports = {
	register: function (app) {
		app.get("/groups/room/:room_id", getGroupsByRoom);
	}
};