	$(document).ready(function(){

	var link = $('.main-link');	
	var menu = $('.main-menu');
	var link_active = $('.main-link-active');
	var menu_active = $('.main-menu-active');
	var nav_link = $('.main-menu ul li a');
	
	link.click(function(){
		link.toggleClass('main-link-active');
		menu.toggleClass('main-menu-active');
	});

	link_active.click(function(){
		link.removeClass('main-link-active');
		menu.removeClass('main-menu-active');
	});

	nav_link.click(function(){
		link.removeClass('main-link-active');
		menu.removeClass('main-menu-active');
	});

	

	});
