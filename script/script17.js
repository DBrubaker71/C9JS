/// <reference path="../typings/jquery/jquery.d.ts"/>
$(function() {
	
	//	Initialization Code
	//	Init Tabs
	$('#tabs').tabs();
	
	//	Init DatePicker
	$('#datepicker').datepicker({ 
		onSelect: function(dateText, inst) {
			$('#title').text('You picked: ' + dateText);	
		}
	});
	
	
});

