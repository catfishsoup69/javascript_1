var table = document.querySelector('table');
var tr, td;

function desk(table) {
	var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	var figures = ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л']

	for (var i = 0; i < 10; i++) {
		tr = document.createElement('tr');
		table.appendChild(tr);

		for (var j = 0; j < 10; j++) {
			td = document.createElement('td');
			tr.appendChild(td);

			if (j == 0) {
				td.style.border = 'none';
				td.classList.add('bg-dark');
				if (i > 0 && i < 9) {
					td.innerText = 9 - i;
				}
			}

			if (j == 9) {
				td.style.border = 'none';
				td.classList.add('bg-dark');
				if (i > 0 && i < 9) {
					td.innerText = 9 - i;
					td.classList.add('rot');
				}
			}

			if (i == 0) {
				td.style.border = 'none';
				td.classList.add('bg-dark');
				if (j > 0 && j < 9) {
					td.innerText = letters[j - 1];
					td.classList.add('rot');
				}
			}

			if (i == 9) {
				td.style.border = 'none';
				td.classList.add('bg-dark');
				if (j > 0 && j < 9) {
					td.innerText = letters[j - 1];
				}
			}

			if (i > 0 && i < 9 && j > 0 && j < 9) {
				if ((i + j) % 2 == 1) {
					td.classList.add('bg-dark');
				} else {
					td.classList.add('bg-light');
				}
			}

			if (i == 1 && j > 0 && j < 9) {
				td.innerText = figures[j - 1];
				td.classList.add('rot');
			}

			if (i == 2 && j > 0 && j < 9) {
				td.innerText = 'п';
				td.classList.add('rot');
			}

			if (i == 7 && j > 0 && j < 9) {
				td.classList.add('white');
				td.innerText = 'п';
			}

			if (i == 8 && j > 0 && j < 9) {
				td.classList.add('white');
				td.innerText = figures[j - 1];
			}
		}
	}
}

desk(table);



var tableFig = document.getElementById('fig')

function figureImg(table) {
	var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
	var figureImgWhite = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;']
	var figureImgBlack = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;']

	for (var i = 0; i < 10; i++) {
		tr = document.createElement('tr');
		table.appendChild(tr);

		for (var j = 0; j < 10; j++) {
			td = document.createElement('td');
			tr.appendChild(td);

			if (j == 0) {
				td.style.border = 'none';
				td.classList.add('bg-dark');
				if (i > 0 && i < 9) {
					td.innerText = 9 - i;
				}
			}

			if (j == 9) {
				td.style.border = 'none';
				td.classList.add('bg-dark');
				if (i > 0 && i < 9) {
					td.innerText = 9 - i;
					td.classList.add('rot');
				}
			}

			if (i == 0) {
				td.style.border = 'none';
				td.classList.add('bg-dark');
				if (j > 0 && j < 9) {
					td.innerText = letters[j - 1];
					td.classList.add('rot');
				}
			}

			if (i == 9) {
				td.style.border = 'none';
				td.classList.add('bg-dark');
				if (j > 0 && j < 9) {
					td.innerText = letters[j - 1];
				}
			}

			if (i > 0 && i < 9 && j > 0 && j < 9) {
				if ((i + j) % 2 == 1) {
					td.classList.add('bg-dark');
				} else {
					td.classList.add('bg-light');
				}
			}
			if (i == 1 && j > 0 && j < 9) {
				td.innerHTML = figureImgBlack[j - 1];
				td.classList.add('rot');
			}

			if (i == 2 && j > 0 && j < 9) {
				td.innerHTML = '&#9823;';
				td.classList.add('rot');
			}

			if (i == 7 && j > 0 && j < 9) {
				td.innerHTML = '&#9817;';
			}

			if (i == 8 && j > 0 && j < 9) {
				td.innerHTML = figureImgWhite[j - 1];
			}
		}
	}
}
figureImg(tableFig);