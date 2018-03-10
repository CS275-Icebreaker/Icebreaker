"use strict";

/**
 * Ensures the provided fields are present in a request body. If not all fields 
 * are present an error response is sent.
 *
 * @param {Express Request} req Express request to validate fields are present 
 *			        in.
 * @param {Express Response} res Express response to send error response with.
 * @param {String[]} fields Names of required body fields
 * @returns {Boolean} indicates if all fields where present
 */
function requireBodyFields(req, res, fields) {
	var missingFields = [];

	// Check provided fields exist
	for (var field of fields) {
		if (req.body[field] === undefined) {
			missingFields.push(field);
		}
	}

	// If any missing fields
	if (missingFields.length > 0) {
		res.status(400).send({
			error: `missing body fields: ${missingFields}`
		});
		return false;
	}

	return true;
}

module.exports = {
	requireBodyFields: requireBodyFields
};
