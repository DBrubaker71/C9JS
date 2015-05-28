/// <reference path="../typings/jquery/jquery.d.ts"/>
$(function() {
	
	//	Initialization Code
	$('#main').append("<img src='images/plus-24.png' alt='Click me to see the paragraph' id='clickMe' />");
	
	$('#clickMe').click(function() {
		if($('#clickMe').attr('src') === 'images/plus-24.png') {
			$('#message').show('fast');
			$('#clickMe').attr('src', 'images/minus-24.png');	
		}
		else {
			$('#message').hide('slow');
			$('#clickMe').attr('src', 'images/plus-24.png');
		}
	});
	
	$('#message').hide();
		
	/*
	$('#clickMe').toggle(function() {
		$('#message').show('fast');
		$('#clickMe').attr('src', 'images/minus-24.png');
	}, function() {
		$('#message').hide('slow');
		$('#clickMe').attr('src', 'images/plus-24.png');	
	});
	*/
	
});

var C9JS_18 = {};

C9JS_18.version = '1.0.0';

C9JS_18.planet = {
	id: 34,
	name: "Intempstesta Nox"
};



