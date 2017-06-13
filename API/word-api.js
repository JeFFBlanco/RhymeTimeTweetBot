const datamuse = require('./ThirdParty/datamuse-api.js');
const dict = require('./ThirdParty/webdict-api.js');
const _ = require('lodash');
const helpers = require('../Utilities/helpers.js')

module.exports = {

	getDefinition: function(word, callback) {
		return dict.getDefinition(word, callback);
	},

	getRhymes: function(word, callback) {
		return datamuse.getRhymes(word, callback);
	},

	getIntro: function(wordData, rhymeTemplate) {
		// Narrow down to phrases with correct part of speech.
		var intros = _.find(rhymeTemplate.IntroPharases, function(p) { return p. })
		// Grab random intro temple


		//
	}

};