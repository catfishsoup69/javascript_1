var i = 0;

while (i <= 100) {
	if (i > 0 && i <= 2) {
		document.write(i + ' ');
	} else if (i > 2) {
		var j = 2;
		while (j < i) {
			if (i % j == 0) {
				break;
			}
			j++;
		}
		if (j == i) {
			document.write(i + ' ');
		}
	}
	i++;
}

var goods = [{
		title: 'Товар 1',
		price: 100,
		count: 1
	},
	{
		title: 'Товар 2',
		price: 200,
		count: 2
	},
	{
		title: 'Товар 3',
		price: 300,
		count: 3
	}
]

function countBasketPrice(array) {
	var s = 0;
	for (item of array) {
		s += item.price * item.count;
	}
	return s;
}

document.write('<p>Задания 2-3. Сумма составляет ' + countBasketPrice(goods) + '</p>');

for (var k = 0; k < 10; k++, console.log(k - 1)) {}

var x = '';
for (var str = 0; str < 20; str++) {
	x += 'x';
	console.log(x);
}