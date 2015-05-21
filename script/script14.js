/*
http://jQuery.com

jQuery(document).ready(function() {
	//	Start up code goes here
	alert("this works");
});

This can also be written as follows:

$(function(){
	//	Start up code goes here
	alert("this works");
});

*/

$(function() {
	//	Start up code goes here
	//$("#title").text("Yay, I can now get at the h1!");
	
	//	$("#first").html("<h2>great quote</h2>");
	
	//	append and prepend work INSIDE the given selection
	$("#first").prepend("<h2>great quotes");
	$("#first").append("<h3>...for you to ponder...</h3>");
	
	//	before, after, insertBefore, insertAfter work OUTSIDE
	//	the given selection.
	
	$("#myAnchor").attr("href", "http://code.visualstudio.com");

	$("#title").addClass("standout");
});

//	Didnt see this work
$('p').fadeOut(500).fadeIn(500);

$('<div id="badge><img src="badge.gif" alt="Badge earned for achievement"</div>');

$.myCustomMethod = function() {
	alert('hi');
};

$.listBox = {
	show: function() { },
	hide: function() { },
	position: function() { },
	initiate: function() { }
};