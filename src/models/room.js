"use strict";

var randtoken = require("rand-token");
var mongoose = require("mongoose");

// TODO: Improve grouper/groupHelper when merged
var grouper = (id) => { 
	return Promise.resolve([
		{room_id: id, topic: "a"},
		{room_id: id, topic: "b"}
	]); 
};

var User = require("./user");

var RoomSchema = mongoose.Schema({
	name: String,
	code: String,
	group_num: Number,
	stage: String
	//owner_id: mongoose.Schema.Types.ObjectId
});

var codeChars = "1234567890";
RoomSchema.statics.GenerateCode = function() {
	return randtoken.generate(4, codeChars);
};

/** 
 * Determines if all users in a room have selected at least one topic.
 * If so it notifies all clients via Socket.io to retrieve groups.
 * @param {Server}
 * @param {String} id ID of room to look for selections in.
 * @returns {Promise} Resolves with boolean indicating if all users have selected 
 *                    at least one topic.
 *		      Rejects with an error.
 */
RoomSchema.statics.AllUsersSelected = function(server, id) {
	return User.find({
		room_id: id
	}).then((users) => {
		// Check if any users haven't selected topics
		for (var user of users) {
			// If a user hasn't selected a topic
			if ((user.topics === undefined) || (user.topics.length === 0)) {
				return Promise.resolve(false);
			}
		}

		// If all users have selected topics
		return Promise.resolve(true);
	}).then((allSelected) => {
		// If not all selected
		if (!allSelected) {
			return Promise.resolve(false);
		}

		// If all selected
		return grouper(id);
	}).then((groups) => {
		// Notify clients
		server.socket.to(id).emit("grouped", groups);

		return Promise.resolve(true);
	});
}

var Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
