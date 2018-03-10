"use strict";

var room = require("./room");

/**
 * Adds all Model method endpoint handlers to the Express app
 * @param {ExpressJS App} app Express app to add handlers to
 */
function register(app) {
	room.register(app);
}

module.exports = {
	register: register
};
