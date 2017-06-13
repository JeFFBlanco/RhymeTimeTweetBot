
var util = require('util');
const wordApi = require('./API/word-api.js');


var word = 'pond';
wordApi.getRhymes(word, function(rhymes) {
	console.log(util.format('Got some rhymes for %s', word));
});

wordApi.getDefinition(word, function(defn) {
	console.log(util.format("Got defintion for %s.  Part of Speech is '%s'", word, defn.type));
});