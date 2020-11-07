var goods = [{
		title: 'Бежевый',
		img: 'img/beige.jpg',
		price: '$11',
	},
	{
		title: 'Белый',
		img: 'img/white.jpg',
		price: '$8',
	},
	{
		title: 'Оранжевый',
		img: 'img/orange.jpg',
		price: '$9',
	}
]

var basket = [];
var basketTable = document.querySelector('table.basket__table');
var basketTr, basketTitle, basketCount, basketPrice, basketTrSum, basketSum, basketSumCount

function countBasketPrice(array) {
	var sum = 0;
	for (item of array) {
		sum += goods[item.id - 1].price * item.count;
	}
	return sum;
}

function addToBasket(e) {
	var item = {};
	item.count = 1;

	var n = e.target.id.substr(4);

	var k;
	for (k = 0; k < basket.length; k++) {
		if (basket[k].id == n) {
			++basket[k].count;
			basketCount.innerHTML = basket[k].count;
			break;
		}
	}

	if (k == basket.length) {
		basket.push(item);
		basket[k].id = n;

		basketTr = document.createElement('tr');
		basketTable.appendChild(basketTr);

		basketTitle = document.createElement('td');
		basketTitle.classList.add('basket__item__title');
		basketTr.appendChild(basketTitle).innerHTML = goods[n - 1].title;

		basketCount = document.createElement('td');
		basketCount.classList.add('basket__item__count');
		basketTr.appendChild(basketCount).innerHTML = basket[k].count;

		basketPrice = document.createElement('td');
		basketPrice.classList.add('basket__item__price');
		basketTr.appendChild(basketPrice).innerHTML = goods[n - 1].price;
	}
	// basketSum = document.createElement('td');
	// basketSum.colspan = "2";
	// basketSum.innerText = 'Сумма';
	// basketTrSum.appendChild(basketSum);

	// basketPrice = document.createElement('td');
	// basketPrice.classList.add('basket__item__price');
	// basketTr.appendChild(basketPrice).innerHTML = goods[n - 1].price;
}

// basketTrSum = document.createElement('tr');
// basketTable.appendChild(basketTrSum);

var cardBlock = document.querySelector('div.goods__card-block');
var card, cardTitle, cardImg, cardPrice, cardBtn;

for (var i = 0; i < goods.length; i++) {
	card = document.createElement('div');
	card.classList.add('goods__card');
	cardBlock.appendChild(card);

	cardTitle = document.createElement('h3');
	cardTitle.classList.add('goods__card__title');
	card.appendChild(cardTitle).innerHTML = goods[i].title;

	cardImg = document.createElement('img');
	cardImg.classList.add('goods__card__img');
	cardImg.setAttribute('id', 'img-' + (i + 1));
	card.appendChild(cardImg).src = goods[i].img;

	cardPrice = document.createElement('span');
	cardPrice.classList.add('goods__card__price');
	card.appendChild(cardPrice).innerHTML = goods[i].price;

	cardBtn = document.createElement('button');
	cardBtn.classList.add('goods__card__btn');
	cardBtn.setAttribute('id', 'btn-' + (i + 1));
	card.appendChild(cardBtn).innerText = 'Купить';
	cardBtn.onclick = addToBasket;
}