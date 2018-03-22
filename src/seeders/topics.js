"use strict"

var Topic = require("./../models/topic.js");
var topicData = require("./data/topics.json");

function seedTopics() {
	var topics = topicData['topics'];
	var promises = [];
	
	for(var num in topics) {
		promises.push(Topic.findOneAndUpdate({name: topics[num]['name']}, {$set:{description: topics[num]['description'], picture_path: topics[num]['picture_path']}}, {new: true, upsert: true}, function(err, doc){
			if(err){
				console.error(`error seeding topic ${num}: ${error}`);
			}
		}));
	}
	
	Promise.all(promises)
		.then((topicModels) => {
			console.log(`${topicModels.length} topics seeded`);
		})
		.catch((err) => {
			throw `error adding topics to database: ${err}`;
	});
}

module.exports = {
	seedTopics : seedTopics
};
