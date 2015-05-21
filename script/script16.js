//	Code for click-a-kitty game
$(function() {
	
	//	Initialization Code
	$('#success').hide();
	$('#startover').addClass('hoverOut');
	
	var score = 0;
	
	$('#kitty').click(function() {
		//	Increment Score
		score++;
		$('#score').text(score);
		
		//	Show success
		$('#success').show('fast').fadeOut(2000);
		
	});

	//	Start over	
	//	The overload for .hover we are using takes 2 handlers
	//	as params so first will be for hover in and
	//	second will be for hover out	
	$('#startover').hover( function() {
		//	This is for the hoverIn Handler
		//	Reset the score
		score = 0;
		
		//	Update the score display
		$('#score').text(score);
		
		//	Hide the success text
		$('#success').hide();
		
		//	Add Handler for hoverIn and remove handler for hoverOut
		$('#startover').addClass('hoverIn').removeClass('hoverOut');
	}, function() {
		//	This is the hoverOut Handler
		$('#startover').removeClass('hoverIn').addClass('hoverOut');
	});


});

