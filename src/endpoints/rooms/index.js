"use strict"; 

var findRoom = require("./findRoom");

function register(app){
	findRoom.register(app);
}

module.exports = {
	register: register
}; 