/// <reference path="../typings/jquery/jquery.d.ts"/>
/*$(function() {
	
	//	Initialization Code
	function buildACat() {
		var catName = "Whinnie";
		function catFactory() {
			//	Functional scoping: in JavaScript, the scope 
			//	of a variable is defined by its location within 
			//	the source code, and nested functions have 
			//	access to variables declared in their outer scope
			
			alert(catName);
		}
		catFactory();	//	() means it executes the inner method immediately
	}
	
	$('#buildcat').click(function() {
		buildACat();
	});
});
*/

$(function() {
	function buildACat() {
		var catName = "Kitty Q";
		function catFactory() {
			alert(catName);
		}	
		//	Notice: instead of executing it, it just
		//	returns a reference
		return catFactory;
	};
	
	$('#buildcat').click(function() {
		var myNewCat = buildACat();
		//	buildACat() has executed It has gone out of scope now,
		//	and all its private funciton variables with it, right? Right?
		
		myNewCat();	//	<-- Not so fast... the catName variable value lives
	});
	
	
	//	myNewCat() becomes a Closure its a snapshot of the environment when 
	//	the variable was initialized and can be retrieved by calling the
	//	Constructor on the variable
});

