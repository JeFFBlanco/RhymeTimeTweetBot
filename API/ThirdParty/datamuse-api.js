const datamuse = require('datamuse');


module.exports = {
	
	getRhymes: function(word, callback) {
		// Get Words that rhyme with input.
		datamuse.words({
			// rhymes with
			rel_rhy: word,
			// include part of speech (n, v, adv., adj. etc)
			md: 'p'
		})
		.then((json) => {
			// console.log(json);

			callback(json);
		});
	}

};