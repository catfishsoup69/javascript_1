var numberObj = {};

function numberToObj(k) {
	if (k >= 100 && k <= 999) {
		numberObj.hundreds = Math.floor(k / 100);
		k = k - numberObj.hundreds * 100;
	}
	if (k >= 10 && k <= 99) {
		numberObj.tens = Math.floor(k / 10);
		k = k - numberObj.tens * 10;
	}
	if (k >= 1 && k <= 9) {
		numberObj.units = k;
	}
	console.log(numberObj);
}


while (true) {
	var number = +prompt('Введите число от 0 до 999');
	if (!isNaN(number)) {
		if (number > 999) {
			console.log('Число слишком большое');
			console.log(numberObj);
		} else {
			numberToObj(number);
		}
		break;
	} else {
		alert('Введите циферки');
	}
}