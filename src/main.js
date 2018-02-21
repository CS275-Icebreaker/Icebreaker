"use strict";

// App configuration
const config = require("./config");

// Express setup
const express = require("express");
const app = express();

app.use(express.static(config.staticDir));

// Endpoints
app.get("/api/test", (req, res) => {
	res.send({status: "ok"});
});

// Listen
app.listen(config.port, () => {
	console.log(`listening on port ${config.port}`);
	console.log(`    navigate to localhost:${config.port} for development`);
});
