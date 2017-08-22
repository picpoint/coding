	$(document).ready(function(){

	var main = $('.main-link');
	var menu = $('.main-menu');
	var link = $('.main-menu a');
		
		main.click(function(){
			main.toggleClass('main-link-active');
			menu.toggleClass('main-menu-active');
		});

		link.click(function(){
			link.toggleClass('main-menu');
		});
		
	

	});

	/*

.main - главный блок, родитель
.main-link - кружок для клика вызова
.main-link-active - кружек для клика АКТИВНЫЙ
.main-menu - фиолетовое меню, по умолчанию не активное
.main-menu-active - фиолетовое меню активное


	*/