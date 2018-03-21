var socket = io.connect();

socket.on("connect", function() {
	console.log("socket connected");
});

socket.on("grouped", function(data) {
	console.log("grouped: ", data);
});
