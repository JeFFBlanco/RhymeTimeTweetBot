const datamuse = require('./ThirdParty/datamuse-api.js');
const dict = require('./ThirdParty/webdict-api.js');
const helpers = require('../Utilities/helpers.js');
const rando = require('random-int');
const _ = require('lodash');


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

		var phrase = this.partOfSpeechReplace(rhymes, phrase, 'n');
		phrase = this.partOfSpeechReplace(rhymes, phrase, 'v');
		phrase = this.partOfSpeechReplace(rhymes, phrase, 'adv');
		phrase = this.partOfSpeechReplace(rhymes, phrase, 'adj');

		return phrase;
	},

	// targetPartOfSpeech : 'n', 'v', 'adv', 'adj', etc..
	partOfSpeechReplace: function(rhymes, phrase, targetPartOfSpeech) {
			
		// Get random rhyme for each part-of-speech, if possible.
		var potentialRhymes = _.filter(rhymes, function(r) { return _.includes(r.tags, targetPartOfSpeech); });

		// Default word if no rhymes of that part-of-speech available.
		var rhyme = { "word": "narwhal" };
		if (potentialRhymes.length > 0) {
			var randoIndex = rando(0, potentialRhymes.length - 1);
			var rhyme = potentialRhymes[randoIndex];	
		}

		phrase = phrase.replace(targetPartOfSpeech, rhyme.word);

		return phrase;
	}

};