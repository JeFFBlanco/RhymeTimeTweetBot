
const util = require('util');
const jsonFile = require('json-tu-file');
const async = require('async');
const wordApi = require('./API/word-api.js');
const tweeter = require('./API/ThirdParty/twitter-api.js');



// TODO: command line argument for word
var word = 'back';

getPhraseTemplate(function(){});

wordApi.getRhymes(word, function(rhymes) {
	console.log(util.format('Got some rhymes for %s', word));

	var rhymeyStory = generateRhymeyStory(word, rhymes);

	console.log('-------------------------');
	console.log('-------------------------');
	console.log(rhymeyStory);
	console.log('-------------------------');
	console.log('-------------------------');

	// Tweet it!
	tweeter.tweet(rhymeyStory, function(error, resp) {
		console.log('Tweeted It!');
	});

});

wordApi.getDefinition(word, function(defn) {
	console.log(util.format("Got defintion for %s.  Part of Speech is '%s'", word, defn.type));
});


function generateRhymeyStory(word, rhymes) {

	var intro = wordApi.getIntro(rhymes, _phraseTemplate.IntroPharases);
	
	var transition1 = wordApi.getTransition(rhymes, _phraseTemplate.Transitions);
	var verse1 = wordApi.getVerse(rhymes, _phraseTemplate.Verses);
	
	var transition2 = wordApi.getTransition(rhymes, _phraseTemplate.Transitions);
	var verse2 = wordApi.getVerse(rhymes, _phraseTemplate.Verses);

	var rhymeytimey = util
						.format("%s \r\n\r\n %s %s. \r\n %s \r\n %s.", word, intro, verse1, transition1, verse2);

	return rhymeytimey;
}

function getPhraseTemplate(callback) {
    console.log('Initializing story phrases...........');

    // TODO: Make Config file a commandline argument
    jsonFile.readFile('.\\Templates\\rhyme-time.template.json', function (err, data) {
        return handlePhraseTemplateLoaded(err, data, callback);
    });
}

function handlePhraseTemplateLoaded(err, data, callback) {
	if (err) {
		console.log('Beep Bope Boop - Whoopsies! RhymeBot could not load story tempate');
		throw err;
	}
	_phraseTemplate = data;

	return callback();
}