$(document).ready(function(){

	var tab = $('.tab');

	
	tab.click(function(){
		var target = $(this).attr('data-target');
		$('.tab-content').hide();
		$('.'+target).show();

	});

});