const webdict = require('webdict');
const util = require('util');

module.exports = {

	getDefinition: function (word, callback) {

		console.log(util.format("Looking up definition for '%s'", word));

		webdict('dictionary', word)
			.then(resp => {
				// console.log(resp);
				callback(resp);
			});
	}

};