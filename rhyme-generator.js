
var util = require('util');
const wordApi = require('./API/word-api.js');


var word = 'pond';
wordApi.getRhymes(word, function(rhymes) {
	console.log(util.format('Got some rhymes for %s', word));

	generateRhymeyStory(word, rhymes);
});

wordApi.getDefinition(word, function(defn) {
	console.log(util.format("Got defintion for %s.  Part of Speech is '%s'", word, defn.type));
});


function generateRhymeyStory(word) {
	var intro = wordApi.getIntro(word);
	// var verse1 = 
}