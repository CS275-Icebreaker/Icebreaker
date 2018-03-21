"use strict"; 

var findRoom = require("./findRoom");
var createRoom = require("./createRoom"); 

function register(app){
	createRoom.register(app); 
	findRoom.register(app);
}

module.exports = {
	register: register
}; 
