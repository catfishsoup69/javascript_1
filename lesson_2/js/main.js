// Задание 3
var a = Math.round(+prompt('Задание 3. Введите целое число a (можно отрицательное)'));
var b = Math.round(+prompt('Задание 3. Введите целое число b (можно отрицательное)'));

if (a >= 0 && b >= 0) {
	document.write('<p>Задание 3. Разность равна: ' + (a - b) + '</p>');
} else if (a < 0 && b < 0) {
	document.write('<p>Задание 3. Произведение равно: ' + (a * b) + '</p>');
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
	document.write('<p>Задание 3. Сумма равна: ' + (a + b) + '</p>');
} else {
	document.write('<p>Задание 3. Вы ввели не числа :(</p>')
}

// Задание 5
function sum(a, b) {
	return a + b;
}

function diff(a, b) {
	return a - b;
}

function prod(a, b) {
	return a * b;
}

function quot(a, b) {
	return a / b;
}

// Задание 6
var operation = prompt('Задание 6. Введите операцию (сложение/вычитание/умножение/деление)');

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 'сложение':
			return sum(arg1, arg2);
		case 'вычитание':
			return diff(arg1, arg2);
		case 'умножение':
			return prod(arg1, arg2);
		case 'деление':
			return quot(arg1, arg2);
	}
}
document.write('<p>Задание 6. ' + operation + ' ' + mathOperation(a, b, operation) + '</p>');

// Задание 8
function power(val, pow) {
	if (pow == 0) {
		return 1;
	} else if (pow < 0) {
		return (1 / val * power(val, pow + 1));
	}
	return (val * power(val, pow - 1));
}
document.write('<p>Задание 8. ' + power(a, b) + '</p>');