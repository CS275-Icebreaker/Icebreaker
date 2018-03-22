"use strict";

var mongoose = require("mongoose");

var helpers = require("../endpoints/helpers");
var group = require("./groupHelper");
var Room = require("../models/room");
var User = require("../models/user");
var Topic = require("../models/topic");
var Group = require("../models/group");

function makeGroups(roomID){

//console.log("made it");
	var userA = [];
//console.log(roomID);
	return User.find( { room_id: roomID} )
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

		//console.log(groupNum);

		var proms = [];
		var groupA = [];
		for(var i = 0; i < groupNum; i++)
		{
			//console.log(i);
			var usersInGroup = [];
			for(var j = i*groupSize; j < (i+1) * groupSize; j++)
				{
					//console.log(j);
					usersInGroup.push(userA[j].id);
					if(j == (groupNum * groupSize)-1 && remainUsers != 0)
					{
						for (var k = (groupNum * groupSize); i < userA.length; i++) 
						{
							//console.log(k);
							usersInGroup.push(userA[k].id);
						}
					}
				}

			
			console.log(usersInGroup);

			var group = new Group({
				room_id: roomID,
				topic_id: userA[0].topics[0],
				stage: 1,
				members: usersInGroup
				});
			console.log("made a group");

			proms.push(group.save()
			.catch((err) => {
				throw `error saving user: ${err}`;
			}));
		}
		
		return Promise.all(proms);

	});
}

module.exports = makeGroups;