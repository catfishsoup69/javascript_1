var tc = +(prompt('Введите температуру, °C:'));
var tf = (9 / 5) * tc + 32;
alert('Температура: ' + tf + ' °F');

var a = +(prompt('Введите число a'));
var b = +(prompt('Введите число b'));

a = a + b;
b = a - b;
a = a - b;
document.write('<p>Доп. задание. После обмена a: ' + a + ' b: ' + b + '</p>');

var name = 'Василий';
var admin = name;
document.write('<p>Задание 2. ' + admin + '</p>');

var sum = 1000 + '108';
document.write('<p>Задание 3. Выражение будет равно ' + sum + '</p>');