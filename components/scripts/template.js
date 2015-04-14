$(function(){
	var Mustache = require('mustache');

	$.getJSON('js/data.json', function(data) {
		var tempalte = $('#speakerstpl').html();
		$('#speakers').html(html);
	});// getJSON
});// function