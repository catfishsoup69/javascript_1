// Задание 4
var a = +(prompt('Задание 4. Введите число от 0 до 15:'));
document.write('<p>Задание 4.</p>');
switch (a) {
	case 0:
		document.write(a++ + ' ');
	case 1:
		document.write(a++ + ' ');
	case 2:
		document.write(a++ + ' ');
	case 3:
		document.write(a++ + ' ');
	case 4:
		document.write(a++ + ' ');
	case 5:
		document.write(a++ + ' ');
	case 6:
		document.write(a++ + ' ');
	case 7:
		document.write(a++ + ' ');
	case 8:
		document.write(a++ + ' ');
	case 9:
		document.write(a++ + ' ');
	case 10:
		document.write(a++ + ' ');
	case 11:
		document.write(a++ + ' ');
	case 12:
		document.write(a++ + ' ');
	case 13:
		document.write(a++ + ' ');
	case 14:
		document.write(a++ + ' ');
	case 15:
		document.write(a++ + ' ');
}

var b = +(prompt('Задание 4 (доп). Введите число от 0 до 15:'));
document.write('<p>Задание 4 (доп).</p>');

function f(b) {
	if (b >= 16) {
		return;
	}
	document.write(b + ' ');
	f(b + 1);
}
f(b);