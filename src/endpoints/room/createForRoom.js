"use strict";

var helpers = "../helpers";

var URL = "/api/users/join";

/**
 * Endpoint handler for createForRoom endpoint.
 */
function handle(req, res) {
	if (!helpers.request.requireBodyFields(req, res, 
		["room_id", "name", "year", "major"])) {

		return;
	}


}

/**
 * Adds all Model method endpoint handlers to the Express app
 * @param {ExpressJS App} app Express app to add handlers to
 */
function register(app) {
	app.post(URL, handle);
}

module.exports = {
	register: register
};
