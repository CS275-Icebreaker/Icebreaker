"use strict";

var mongoose = require("mongoose");

var helpers = require("../helpers");
var User = require("../../models/user");
var Topic = require("../../models/topic");

/**
 * Chooses a list of topics for a user
 */
function handle(req, res) {
	if(helpers.request.requireBodyFields(req, res, ["topics", "user_id"])) {
		var topics = req.body.topics;
		var userId = req.body.user_id;

		// Get user
		var promise = User.findById(userId)
			.then((user) => {
				// If user not found
				if(user === null) {
					throw `user not found`;
				}

				var state = {};
				state.user = user;

				return Promise.resolve(state);
			})
			.catch((err) => {
				throw `error retrieving user: ${err}`;
			})
			.then((state) => {
				// Get all topics from database
				var all = [];

				for(var topicId of topics) {
					all.push(Topic.findById(topicId)
					.catch((err) => {
						throw `error retrieving topic `+
							`from database: ${err}`;
					}));
				}

				return Promise.all(all)
					.then((topics) => {
						state.topics = topics;
						return Promise.resolve(state);
					});
			})
			.then((state) => {
				// If any topics don't exist
				var missing = [];

				for(var topic of state.topics) {
					if(topic === null) {
						missing.push(topic);
					}
				}

				if(missing.length > 0) {
					throw `topics with ids: ${missing} ` +
						`do not exist`;
				}

				return Promise.resolve(state);
			})
			.then((state) => {
				// Record topics
				var currentTopics = state.user.topics;

				// If no current topics
				if(currentTopics === undefined) {
					currentTopics = topics;
				}

				// Upsert
				for(var topicId of topics) {
					// If doesn't exist in user document
					if(currentTopics.indexOf(topicId) === -1) {
						currentTopics.push(topicId);
					}
				}

				state.user.topics = currentTopics;

				// Save
				return state.user.save()
					.then(() => {
						return Promise.resolve(state);
					})
					.catch((err) => {
						throw `error saving user topic`+
							` selection: ${err}`;
					});
			})
			.then((state) => {
				return Promise.resolve({
					user: state.user.public()
				});
			});

		// Send response
		helpers.response.sendPromise(res, promise);
	}
}

/**
 * Registers choose topic endpoint
 * @param {Express App} app Express app to register handler with
 */
function register(app) {
	app.post("/api/topics/choose", handle);
}

module.exports = {
	register: register
};
