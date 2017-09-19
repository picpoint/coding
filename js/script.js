function mywinclose() {

var thisWindow = window.open("https://yandex.ru/",'_self');
var exit = confirm("Хотите закрыть страницу?");
	
	if(exit) {
		thisWindow.close();
	}
}

