;(function(){
	'use strict';

	let askLogin = prompt('Введите логин: ', '');


	if (askLogin === 'Админ') {

		let askPassword = prompt('Введите пароль: ', '');

		if (askPassword === 'Чёрный Властелин') {

			alert ('Добро пожаловать!');

		} else if (askPassword === null) {

			alert ('Вход отменён!');

		} else {

			alert ('Пароль неверен!');

		}

	} else if (askLogin === null) {

		alert ('Вход отменен!');

	} else {

		alert ('Я вас не знаю!');
	}

})();