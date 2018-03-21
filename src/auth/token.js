"use strict";
var randtoken = require("rand-token");

var hash = require("./hash");

const TokenLength = 32;

/**
 * Represents an authentication token.
 * @property {String} value Secret token value which a API client will provide 
 *                          to authenticate.
 * @property {String} hashValue Hashed secret token value to store in database.
 */
class Token {
	constructor() {
		this.value = randtoken.generate(TokenLength);
	}

	/**
	 * Computes a token's hashed value.
	 * Caches this value in the internal `hashValue` field.
	 * @returns {Promise} Resolves with hashed value. Rejects with an error.
	 */
	hash() {
		// Check if hash has already been computed
		if (this.hashValue != undefined) {
			return Promise.resolve(this.hashValue);
		}

		return hash.Hash(this.value)
			.then((hashValue) => {
				this.hashValue = hashValue;
				return Promise.resolve(hashValue);
			});
	}
}

module.exports = Token;
