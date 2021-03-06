"use strict";

/**
 * Sends the result of a promise.
 * Use like so:
 * 	var promise = somePromiseMethod();
 *	sendPromise(res, promise);
 *
 * If the promise resolves the result is sent. If the promise rejects the error 
 * is sent in the "error" field.  
 *
 * If the promise rejects with an err argument containing a `status` and `msg` 
 * fields: It sets the HTTP status to `err.status` and sends `{"error": err.msg}` 
 * as the response.
 *
 * @param {Express Response} res Express response to send promise result with
 * @param {Promise} promise Promise to send result of
 * @returns {Promise} Resolves when passed promise completes, no matter the status.
 */
function sendPromise(res, promise) {
	try {
		return promise
			.catch((err) => {
				// If in special format
				if (err.msg !== undefined && err.status !== undefined) {
					res.status(err.status).send({error: err.msg});
				} else {
					// Otherwise
					res.status(500).send({
						error: err
					});
				}
				return Promise.resolve();
			})
			.then((data) => {
				res.send(data);
				return Promise.resolve();
			});
	} catch(err) {
		throw `error sending response: ${err}`;
	}
}

module.exports = {
	sendPromise: sendPromise
};
