const datamuse = require('./ThirdParty/datamuse-api.js');
const dict = require('./ThirdParty/webdict-api.js');
const _ = require('lodash');
const helpers = require('../Utilities/helpers.js');
const rando = require('random-int');


module.exports = {

	getDefinition: function(word, callback) {
		return dict.getDefinition(word, callback);
	},

	getRhymes: function(word, callback) {
		return datamuse.getRhymes(word, callback);
	},

	getIntro: function(rhymes, introPhrases) {
		return this.partOfSpeechReplace(rhymes, introPhrases);
	},

	partOfSpeechReplace: function(rhymes, phrases) {
		
		// Get random phrase.
		var randoPhraseIndex = rando(0, phrases.length - 1);
		var phrase = phrases[randoPhraseIndex];

		// Get random rhyme for each part-of-speech, if possible.
		var nouns = _.filter(rhymes, function(r) { return _.includes(r.tags, 'n'); });
		var randoNounIndex = rando(0, nouns.length - 1);
		var noun = nouns[randoNounIndex];

		// TODO: Fill in dummy word if no rhymes availble for target part-of-speech

	}

};