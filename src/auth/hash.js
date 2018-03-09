"use strict";

var bcrypt = require("bcrypt");

const SaltRounds = 10;

/**
 * Hashes a string with the bcrypt algorithm
 * @param str {String} String value to hash
 * @returns {Promise} Resolves with hashed value, rejects with error
 */
function Hash(str) {
	return bcrypt.hash(str, SaltRounds);
}

/**
 * Compares a plain text string to a hash and determines if they are equal.
 * This is done by hashing the plain text value and comparing the hashed result
 * to the provided hash.
 *
 * @param plainText {String} Un-hashed string to compare
 * @param hash {String} Hash to compare
 * @returns {Promise} Resolves with a single boolean value indicating if the 
 *		      values are equal. Rejects with an error.
 */
function Compare(plainText, hash) {
	return bcrypt.compare(plainText, hash);
}

module.exports = {
	Hash: Hash,
	Compare: Compare
};
