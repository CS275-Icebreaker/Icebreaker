"use strict";

var mongoose = require("mongoose");

var group = require("./groupHelper");
var Room = require("../models/room");
var User = require("../models/user");
var Group = require("../models/group");

function randomI(max) {
    return Math.floor(Math.random() * max);
}

function makeGroups(roomID){
	var userA = [];

    var pickedTopics = [];

	return User.find({room_id: roomID})
        .then((users) => {
            // Determine group size based on # of users
            var groupSize = 0;

            if (users.length < 4) {
                return Promise.reject("must have at least 4 players");
            } else if (users.length < 6) {
                groupSize = 2;
            } else if (users.length < 10) {
                groupSize = 3;
            } else if (users.length < 18) {
                groupSize = 5;
            } else {
                groupSize = 6;
            }

            // Determine number of groups
            var remainUsers = 0;
            var groupNum = Math.floor(users.length/groupSize);

            if (users.length % groupSize != 0) {
                remainUsers = users.length % groupSize;
            }

            var proms = [];
            var groups = [];


            for(var groupI = 0; groupI < groupNum; groupI++){
                var usersInGroup = [];

                for(var memberI = 0; memberI < groupSize; memberI++) {
                    usersInGroup.push(users.pop());
                }


                if (groupI === groupNum - 1) {
                    while(remainUsers > 0) {
                        usersInGroup.push(users.pop());
                        remainUsers -= 1;
                    }
                }

                var allTopics = [];
                for(var user of usersInGroup) {
                    for(var topic of user.topics) {
                        if(allTopics.indexOf(topic) === -1) {
                            allTopics.push(topic);
                        }
                    }
                }

                var choosenTopicIndex = randomI(allTopics.length - 1);
                var topicId = allTopics[choosenTopicIndex]
                allTopics = allTopics.splice(choosenTopicIndex, 1)

                while(pickedTopics.indexOf(topicId) !== -1) {
                    choosenTopicIndex = randomI(allTopics.length - 1);
                    topicId = allTopics[choosenTopicIndex]
                    allTopics.splice(choosenTopicIndex, 1)
                }
                pickedTopics.push(topicId);

                var group = new Group({
                    room_id: roomID,
                    topic_id: topicId,
                    stage: 1,
                    members: usersInGroup
                    });

                var prom = group.save()
                    .catch((err) => {
                        throw `error saving user: ${err}`;
                    });
                proms.push(prom);
            }
            
            return Promise.all(proms)
                .catch((err) => {
                    throw `error saving group: ${err}`;
                });
        });
}

module.exports = makeGroups;
