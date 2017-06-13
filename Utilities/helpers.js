
module.exports = {
	
	getWordTypeToken: function(wordTypeStr) {
		if (wordTypeStr === 'noun') { return '[n]'; }
		if (wordTypeStr === 'verb') { return '[v]'; }
		if (wordTypeStr === 'adverb') { return '[adv]'; }
		if (wordTypeStr === 'adjective') { return '[adj]'; }
	}

};