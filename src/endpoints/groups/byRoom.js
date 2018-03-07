// Express setup
const express = require("express");
const app = express();

const Group = require("../../models/group.js");

function myHandler(req, res) {
	Group.find(function (err, groups) {
		if (err) return console.error(err);
		console.log(groups);
	});
	res.send(groups);
}

module.exports = {
	register: function (app) {
		app.get("/groups/room", myHandler);
	}
};