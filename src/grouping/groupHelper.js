"use strict";

var mongoose = require("mongoose");

var helpers = require("../helpers");
var group = require("./groupHelper");
var Room = require("../../models/room");
var User = require("../../models/user");
var Group = require("../../models/group");

function makeGroups(roomID){
console.log("made it");
	var userA = [];

	var promise = User.find({room_id: roomID})
	.then((users) => {
		userA = users;

		var groupSize = 0;

		if(userA.length >= 25)
			{groupSize = 5;}
		else if(userA.length >= 16)
			{groupSize = 4;}
		else if(userA.length >= 9)
			{groupSize = 3;}
		else 
			{groupSize = 2;}

		var remainUsers = 0;
		var groupNum = Math.floor(userA.length/groupSize);

		if (userA.length%groupSize != 0)
			{remainUsers = userA.length%groupSize}

		var proms = [];
		var groupA = [];
		for(var i = 0; i < groupNum, i++)
		{
			var usersInGroup;
			for(var j = i*groupSize; j < (i+1) * groupSize; j++)
				{
					usersInGroup.push(userA[j].id);
					if(j == (groupNum * groupSize)-1 && remainUsers != 0)
					{
						for (var k = (groupNum * groupSize); i < userA.length; i++) 
						{
							usersInGroup.push(userA[k].id);
						}
					}
				}

			var group = new Group({
				room_id: req.body.room_id,
				topic_id: usersInGroup[0].topics.[0],
				stage: 1,
				members: usersInGroup
				});

			proms.push(group.save()
			.catch((err) => {
				throw `error saving user: ${err}`
			}));
		}
		
		return Promise.all(proms);
}

module.exports = makeGroups;