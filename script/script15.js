$(function() {
	
	//	By id
	//		$('#first').addClass('highlight');
	
	//	By Element
	//	$('p').addClass('highlight');
	
	//	By Class
	//	$('.chosen').addClass('highlight');
	
	//	Combination selection
	//	$('#first, .chosen').addClass('highlight');
	
	//	Contains
	//	$('li:contains("Three")').addClass('highlight');
	
	//	Next, Previous
	//$('li:contains("Three")').next.addClass('highlight');
	
	//	Siblings, parent
	//	$('li:contains("Three")').parent().addClass('highlight');
	//	$('li:nth-child(1)').addClass('highlight');
	
	//	attribute
	//	$('p[name!="mySecondPara"]').addClass('highlight');

	//	$('p').not('[name]').addClass('highlight');

	$('li:even').addClass('highlight');
	
	$('p:empty').text("You seemed lonely so I gave you some text");
});

