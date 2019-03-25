var Twitter = require('twitter');

// Deez Be De-Authenticated

module.exports = {

	tweet: function (status, callback) {
		client.post('statuses/update', { status: status }, function (error, tweet, response) {
			if (error) throw error;
			// console.log(tweet);  // Tweet body.
			// console.log(response);  // Raw response object.

			callback(error, response);
		});
	}

};