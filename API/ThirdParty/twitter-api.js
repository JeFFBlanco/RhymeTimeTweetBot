var Twitter = require('twitter');

// TODO: Protect these values.
var client = new Twitter({
	consumer_key: 'MhyFLgQ2jqE9nCbahWppa848R',
	consumer_secret: 'euKxpLVlxUUNCfLUHHe0UaCN9m7CHipLd93KyF6kZOQlMuuoNw',
	access_token_key: '877006820451262464-TI36NneDUjtWcYnlNT04GhlcvySevLr',
	access_token_secret: 'HqcbUaAwNYej1gVEBEE08NOcM1bOXfgsGsDwxL2FS7gx2'
});

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