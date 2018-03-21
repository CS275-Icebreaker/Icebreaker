"use strict";

var choose = require("./choose");
var choose = require("./getAll");

/**
 * Registers app topics endpoint handlers
 * @param {Express App} app Express app to register handlers with
 */
function register(app) {
	choose.register(app);
}

module.exports = {
	register: register
};
