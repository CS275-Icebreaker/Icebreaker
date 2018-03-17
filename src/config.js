"use strict";

const EnvProd = "production";
const EnvDev = "development";

var config = {
	staticDir: "src/www",
	port: 8000,
	mongoURI: "mongodb://localhost/test",
	env: process.env.NODE_ENV || EnvDev,
	configDir: process.env.APP_CONFIG_DIR || "./"
};

// Check if in production
if(config.env === EnvProd) {
	try {
		var prodConf = require(`${config.configDir}config.production`);

		Object.assign(config, prodConf);
	} catch(e) {
		console.error(`error loading production configuration: ${e}`);
		process.exit();
	}
}

module.exports = config;
