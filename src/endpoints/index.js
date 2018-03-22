"use strict";

var users = require("./users");
var groups = require("./groups");
var topics = require("./topics");
var rooms = require("./rooms");
var groupings = require("./groupings")
/**
 * Adds all Model method endpoint handlers to the Express app
 * @param {ExpressJS App} app Express app to add handlers to
 */
<<<<<<< HEAD
function register(app) {
	users.register(app);
	groups.register(app);
	topics.register(app);
	rooms.register(app); 
	groupings.register(app);
=======
function register(app, server) {
	users.register(app, server);
	groups.register(app, server);
	topics.register(app, server);
	rooms.register(app, server); 
>>>>>>> d2fc6724b2a6e18fde5fdc86d34b0f4de1af6a05
}

module.exports = {
	register: register
};
