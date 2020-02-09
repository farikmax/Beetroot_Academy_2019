;(function(){

	"use strict";

	let question = alert('Введите диапазон чисел в следующих модальных окнах.')

	let startNumber = prompt('Введите начальное число диапазона: ', '');

	let endNumber = prompt('Введите конечное число диапазона: ', '');

	primeNumber();
	
	function primeNumber(){

		let primeNumberArray = [];

		nextNumber:

		for (let i = startNumber; i <= endNumber; i++){

			if(i < 2) continue;

			for (let n = 2; n < i; n++){

				if(i % n == 0) continue nextNumber;
			}

			primeNumberArray.push(i);

		}

		let title = 'Перечень всех простых чисел в вашем диапазоне: ';

		let answer = title + primeNumberArray;

		alert(answer);

		document.write('<h1>Good luck!</h1>')
	}

})();