"use strict";

/**
 * Sends the result of a promise.
 * Use like so:
 * 	var promise = somePromiseMethod();
 *	sendPromise(res, promise);
 *
 * If the promise resolves the result is sent. If the promise rejects the error 
 * is sent in the "error" field. If the promise rejects with an err argument 
 * containing a `status` field it is used as the response HTTP status code.
 *
 * @param {Express Response} res Express response to send promise result with
 * @param {Promise} promise Promise to send result of
 */
function sendPromise(res, promise) {
	promise
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			if (err.status !== undefined) {
				res.status(err.status);
			}

			res.send({
				error: err
			});
		});
}

module.exports = {
	sendPromise: sendPromise
};
