
const util = require('util');
const jsonFile = require('json-tu-file');
const async = require('async');
const wordApi = require('./API/word-api.js');



// TODO: command line argument for word
var word = 'pond';

getPhraseTemplate();

wordApi.getRhymes(word, function(rhymes) {
	console.log(util.format('Got some rhymes for %s', word));

	generateRhymeyStory(word, rhymes);
});

wordApi.getDefinition(word, function(defn) {
	console.log(util.format("Got defintion for %s.  Part of Speech is '%s'", word, defn.type));
});


function generateRhymeyStory(word) {
	var intro = wordApi.getIntro(word, _phraseTemplate.IntroPharases);
	
	var transition1 = wordApi.getIntro(word, _phraseTemplate.Transitions);
	var verse1 = wordApi.getIntro(word, _phraseTemplate.Verses);
	
	var transition2 = wordApi.getIntro(word, _phraseTemplate.Transitions);
	var verse2 = wordApi.getIntro(word, _phraseTemplate.Verses);

	var rhymeytimey = util
						.formt('%s. \r\n', intro)
						.formt('%s. \r\n', transition1)
						.formt('%s. \r\n', verse1)
						.formt('%s. \r\n', transition2)
						.formt('%s. \r\n', verse2);

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
		console.log('Beep Bope Boop - Whoopsies! RhymeBot could not load story tempate') 
		throw;
	}
	_phraseTemplate = data;

	return callback();
}