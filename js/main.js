var taskId, message, accordion;

accordion = document.getElementsByClassName('chapter__header');

for(let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function() {
		this.classList.toggle('active');

		let panel = this.nextElementSibling;
		// if(panel.style.display === 'block') {
		// 	panel.style.display = 'none';
		// 	panel.style.maxHeight = null;
		// } else {
		// 	panel.style.display = 'block';
		// 	panel.style.maxHeight = panel.scrollHeight + 'px';
		// }

		if(panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = 10000 + 'px';
		}
	});
}

function begin1() {
	// Begin1. Дана сторона квадрата a. Найти его периметр P = 4·a.
	let a, p;
	a = Number(prompt('Введите значение a:'));
	p = a * 4;
	taskId = document.getElementById('begin1');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Периметр равен: ' + p + '</p>';
}

function begin2() {
	//Дана сторона квадрата a. Найти его площадь S = a^2
	let a, s;
	a = Number(prompt('Введите значение a:'));
	s = a * a;
	taskId = document.getElementById('begin2');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Площадь равна: ' + s + '</p>';
}

function begin3() {
	//Даны стороны прямоугольника a и b. Найти его площадь S = a·b и периметр P = 2·(a + b)
	let a, b, p, s;
	a = Number(prompt('Введите значение a:'));
	b = Number(prompt('Введите значение b:'));
	p = 2 * (a + b);
	s = a * b;
	taskId = document.getElementById('begin3');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Площадь прямоугольника S = ' + s + '; Периметр прямоугольника P = ' + p + '</p>';
}

function begin4() {
	//Дан диаметр окружности d. Найти ее длину L = π·d. В качестве значения π использовать 3.14.
	let d, L, PI = Math.PI;
	d = Number(prompt('Введите значение диаметра окружности d:'));
	L = PI * d;
	taskId = document.getElementById('begin4');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Длина окружности L = ' + L + '</p>';
}

function begin5() {
	//Begin5. Дана длина ребра куба a. Найти объем куба V = a^3 и площадь его поверхности S = 6·a^2
	let a, V, S;
	a = Number(prompt('Введите значение стороны куба a:'));
	V = a * a * a;
	S = 6 * a * a;
	taskId = document.getElementById('begin5');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Объем куба V = ' + V + '; Площадь боковой поверхности S = ' + S + '</p>';
}

function begin6() {
	//Begin6. Даны длины ребер a, b, c прямоугольного параллелепипеда. Найти его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c).
	let a, b, c, V, S;
	a = Number(prompt('Введите значение стороны a прямоугольного параллелепипеда'));
	b = Number(prompt('Введите значение стороны b прямоугольного параллелепипеда'));
	c = Number(prompt('Введите значение стороны c прямоугольного параллелепипеда'));
	V = a * b * c;
	S = 2 * (a * b + b * c + a * c);
	taskId = document.getElementById('begin6');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Объём прямогольного параллелепипеда V = ' + V + '; Площадь боковой поверхности S = ' + S + '</p>';
}

function begin7() {
	//Begin7°. Найти длину окружности L и площадь круга S заданного радиуса R: L = 2·π·R, S = π·R^2. В качестве значения π использовать 3.14.
	let R, L, S;
	R = Number(prompt('Введите значение радиуса окружности R:'));
	L = 2 * Math.PI * R;
	S = Math.PI * R * R;
	taskId = document.getElementById('begin7');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Длина окружности L = ' + L + '; Площадь круга S = ' + S + '</p>';
}

function begin8() {
	//Begin8. Даны два числа a и b. Найти их среднее арифметическое: (a + b)/2
	let a, b;
	a = Number(prompt('Введите значение a:'));
	b = Number(prompt('Введите значение b'));
	taskId = document.getElementById('begin8');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Среднее арифметическое двух чисел (a + b) / 2 = ' + ((a + b) / 2) + '</p>';
}

function begin9() {
	//Begin9. Даны два неотрицательных числа a и b. Найти их среднее геометрическое, то есть квадратный корень из их произведения: a*b.
	let a, b, Gmiddle;
	a = Number(prompt('Введите положительное значение a:'));
	b = Number(prompt('Введите положительное значение b:'));
	Gmiddle = Math.sqrt(a * b);
	taskId = document.getElementById('begin9');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Среднее геометрическое чисел a и b = ' + Gmiddle + '</p>';
}

function begin10() {
	//Begin10. Даны два ненулевых числа. Найти сумму, разность, произведение и частное их квадратов
	let a, b, sum, diff, mult, div;
	a = Number(prompt('Введите значение a:'));
	b = Number(prompt('Введите значение b:'));
	sum = a * a + b * b;
	diff = Math.pow(a, 2) - Math.pow(b, 2);
	mult = a ** 2 * b ** 2;
	div = a ** 2 / b ** 2;
	taskId = document.getElementById('begin10');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Сумма квадратов: ' + sum + '</p>' + '<p>Разность квадратов: ' + diff + '</p>' + '<p>Произведение квадратов: ' + mult + '</p>' + '<p>Частное квадратов: ' + div + '</p>';
}

function begin11() {
	//Begin11. Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей
	let a, b, sum, diff, mult, div;
	a = Number(prompt('Введите значение a:'));
	b = Number(prompt('Введите значение b:'));
	sum = Math.abs(a) + Math.abs(b);
	diff = Math.abs(a) - Math.abs(b);
	mult = Math.abs(a) * Math.abs(b);
	div = Math.abs(a) / Math.abs(b);
	taskId = document.getElementById('begin11');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Сумма модулей: ' + sum + '</p>' + '<p>Разность модулей: ' + diff + '</p>' + '<p>Произведение модулей: ' + mult + '</p>' + '<p>Частное модулей: ' + div + '</p>';
}

function begin12() {
	//Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу c и периметр P
	let a, b, c, P;
	a = Number(prompt('Введите значение катета a:'));
	b = Number(prompt('Введите значение катета b:'));
	c = Math.sqrt(a ** 2 + b ** 2); //a ** 2 - возведение в квадрат
	P = a + b + c;
	taskId = document.getElementById('begin12');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Гипотенуза c = ' + c + '; Периметр P = ' + P + '</p>';
}

function begin13() {
	//Begin13. Даны два круга с общим центром и радиусами R1 и R2 (R1 > R2). Найти площади этих кругов S1 и S2, а также площадь S3 кольца, внешний радиус которого равен R1, а внутренний радиус равен R2
	let R1, R2, S1, S2, S3;
	R1 = Number(prompt('Введите радиус внешней окружности R1:'));
	R2 = Number(prompt('Введите радиус внутренней окружности R2:'));
	S1 = Math.PI * R1 ** 2;
	S2 = Math.PI * Math.pow(R2, 2);
	S3 = S1 - S2;
	taskId = document.getElementById('begin13');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Площадь внешнего круга S1 = ' + S1 + '; внутреннего S2 = ' + S2 + '; Площадь кольца, которое они образуют S3 = S1 - S2 = ' + S3 + '</p>';
}

function begin14() {
	//Begin14. Дана длина L окружности. Найти ее радиус R и площадь S круга, ограниченного этой окружностью, учитывая, что L = 2·π·R, S = π·R2. В качестве значения π использовать 3.14
	let L, R, S;
	L = Number(prompt('Введите значение длины окружности L:'));
	R = Number( (L / (2 * Math.PI)).toFixed(2) );
	S = Math.PI * Math.pow(R, 2);
	taskId = document.getElementById('begin14');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Радиус окружности R = ' + R + '; Площадь окружности S = ' + S.toFixed(2) + '</p>';
}

function begin15() {
	//Begin15. Дана площадь S круга. Найти его диаметр D и длину L окружности, ограничивающей этот круг, учитывая, что L = π·D, S = π·D^2/4. В качестве значения π использовать 3.14
	let S, D, L;
	S = Number(prompt('Введите площадь круга S:'));
	D = Number( Math.sqrt( ( ( S * 4 ) / Math.PI) ).toFixed(2) );
	L = Math.PI * D;
	taskId = document.getElementById('begin15');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Диаметр круга D = ' + D + '; длина окружности круга L = ' + L.toFixed(2) + '</p>';
}

function begin16() {
	//Begin16. Найти расстояние между двумя точками с заданными координатами x1 и x2 на числовой оси: |x2 – x1|
	let x1, x2, s;
	x1 = Number(prompt('Введите координату x1:'));
	x2 = Number(prompt('Введите координату x2:'));
	s = Math.abs(x2 - x1);
	taskId = document.getElementById('begin16');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Расстояние между точками с координатами x1 и x2 s = ' + s + '</p>';
}

function begin17() {
	//Begin17. Даны три точки A, B, C на числовой оси. Найти длины отрезков AC и BC и их сумму
	let a, b, c, ac, bc, sum;
	a = Number(prompt('Введите координаты точки а: '));
	b = Number(prompt('Введите координаты точки а: '));
	c = Number(prompt('Введите координаты точки а: '));
	ac = Math.abs(c - a);
	bc = Math.abs(c - b);
	sum = ac + bc;
	taskId = document.getElementById('begin17');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Длина отрезка AC = ' + ac + '; BC = ' + bc + '; сумма отрезков AC + BC = ' + sum + '</p>';
}

function begin18() {
	//Begin18. Даны три точки A, B, C на числовой оси. Точка C расположена между точками A и B. Найти произведение длин отрезков AC и BC
	let a, b, c, ac, bc;
	a = Number(prompt('Введите координату точки A'));
	c = Number(prompt('Введите координату точки C'));
	b = Number(prompt('Введите координату точки B'));
	ac = Math.abs(c - a);
	bc = Math.abs(b - c);
	taskId = document.getElementById('begin18');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Длина отрезка AC = ' + ac + '; длина отрезка bc = ' + bc + '; произведение ac и bc = ' + (ac * bc) + '</p>';
}

function begin19() {
	//Begin19. Даны координаты двух противоположных вершин прямоугольника: (x1, y1), (x2, y2). Стороны прямоугольника параллельны осям координат. Найти периметр и площадь данного прямоугольника.
	let x1, y1, x2, y2, sideA, sideB, P, S;
	x1 = Number(prompt('Введите координату x1'));
	y1 = Number(prompt('Введите координату y1'));
	x2 = Number(prompt('Введите координату x2'));
	y2 = Number(prompt('Введите координату y2'));
	sideA = Math.abs(x2 - x1);
	sideB = Math.abs(y2 - y1);
	P = 2 * (sideA + sideB);
	S = sideA * sideB;
	taskId = document.getElementById('begin19');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Периметр прямоугольника P = ' + P + '; Площадь прямоугольника S = ' + S + '</p>';
}

function begin20() {
	//Begin20. Найти расстояние между двумя точками с заданными координатами (x1, y1) и (x2, y2) на плоскости. Расстояние вычисляется по формуле sqrt((x2 - x1)^2 + (y2 - y1)^2)
	let x1, x2, y1, y2, S;
	x1 = Number(prompt('Введите координату x1'));
	y1 = Number(prompt('Введите координату y1'));
	x2 = Number(prompt('Введите координату x2'));
	y2 = Number(prompt('Введите координату y2'));
	S = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
	taskId = document.getElementById('begin20');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Расстояние между точками (' + x1 + '; ' + y1 + ') и (' + x2 + '; ' + y2 + ') = ' + S + '</p>';
}

function begin21 () {
	//Даны координаты трех вершин треугольника: (x1, y1), (x2, y2), (x3, y3). Найти его периметр и площадь, используя формулу для расстояния между двумя точками на плоскости (см. задание Begin20). Для нахождения площади треугольника со сторонами a, b, c использовать формулу Герона: sqrt(p * (p - a) * (p - b) * (p - c)), где p = (a + b + c)/2 — полупериметр
	let x1, x2, x3, y1, y2, y3, a, b, c, p, S;
	x1 = Number(prompt('Введите координату x1'));
	y1 = Number(prompt('Введите координату y1'));
	x2 = Number(prompt('Введите координату x2'));
	y2 = Number(prompt('Введите координату y2'));
	x3 = Number(prompt('Введите координату x3'));
	y3 = Number(prompt('Введите координату y3'));
	a = Math.sqrt(Math.pow((x2 - x1), 2) + (y2 - y1) ** 2);
	b = Math.sqrt(Math.pow((x3 - x2), 2) + (y3 - y2) ** 2);
	c = Math.sqrt(Math.pow((x3 - x1), 2) + (y3 - y1) ** 2);
	p = (a + b + c) / 2;
	S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
	taskId = document.getElementById('begin21');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Сторона a = ' + a + '; b = ' + b + '; c = ' + c + '. Площадь треугольника S = ' + S + '</p>'
}

function begin22() {
	//Begin22°. Поменять местами содержимое переменных A и B и вывести новые значения A и B
	let a, b;
	a = prompt('Введите значение a, кроме 0');
	b = prompt('Введите значение b, кроме 0');
	b = a * b;
	a = b / a;
	b = b / a;
	taskId = document.getElementById('begin22');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Теперь a = ' + a + '; b = ' + b + '</p>';
}

function begin23() {
	//Begin23. Даны переменные A, B, C. Изменить их значения, переместив содержимое A в B, B — в C, C — в A, и вывести новые значения переменных A, B, C.
	let a, b, c, tmp;
	a = prompt('Введите значение a');
	b = prompt('Введите значение b');
	c = prompt('Введите значение c');
	taskId = document.getElementById('begin23');

	tmp = a;
	a = b;
	b = tmp;

	tmp = c;
	c = a;
	a = tmp;
	
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Теперь a = ' + a + '; b = ' + b + '; c = ' + c + '</p>';
}

function begin24() {
	//Begin24. Даны переменные A, B, C. Изменить их значения, переместив содержимое A в C, C — в B, B — в A, и вывести новые значения переменных A, B, C
	let a, b, c, tmp;
	a = prompt('Введите значение a');
	b = prompt('Введите значение b');
	c = prompt('Введите значение c');
	taskId = document.getElementById('begin24');

	tmp = a;
	a = c;
	c = tmp;

	tmp = b;
	b = a;
	a = tmp;
	
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>Теперь a = ' + a + '; b = ' + b + '; c = ' + c + '</p>';
}

function begin25() {
	//Найти значение функции y = 3·x ^ 6 – 6·x ^ 2 – 7 при данном значении x
	let x, y;
	x = prompt('Введите значение x');
	y = 3 * Math.pow(x, 6) - 6 * x ** 2 - 7;
	taskId = document.getElementById('begin25');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>При x = ' + x + '; y = ' + y + '</p>';
}

function begin26() {
	//Begin26. Найти значение функции y = 4·(x–3)^6 – 7·(x–3)^3 + 2 при данном значении x
	let x, y;
	x = prompt('Введите значение x');
	y = 4 * Math.pow((x - 3), 6) - 7 * Math.pow((x - 3), 3) + 2;
	taskId = document.getElementById('begin26');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = '<p>При x = ' + x + '; y = ' + y + '</p>';
}

function begin27() {
	//Begin27°. Дано число A. Вычислить A^8, используя вспомогательную переменную и три операции умножения. Для этого последовательно находить A^2, A^4, A^8. Вывести все найденные степени числа A
	let a, helpA;
	a = Number(prompt('Введите значение a:'));
	taskId = document.getElementById('begin27');
	helpA = a * a;
	message = '<p>A^2 = ' + helpA + '; A^4 = ' + (helpA * helpA);
	helpA *= helpA;
	message += '; A^8 = ' + (helpA * helpA) + '</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin28() {
	//Begin28. Дано число A. Вычислить A15, используя две вспомогательные переменные и пять операций умножения. Для этого последовательно находить A2, A3, A5, A10, A15. Вывести все найденные степени числа A
	let a, helpA, help2A;
	taskId = document.getElementById('begin28');
	a = Number(prompt('Введите значение a: '));
	helpA = a * a; // a ^ 2
	message = '<p>A^2 = ' + helpA;
	help2A = a * helpA; // a ^ 3 
	message += '; A^3 = ' + help2A;
	help2A = helpA * help2A; // a ^ 5
	message += '; A^5 = ' + help2A;
	helpA = help2A * help2A; // a ^ 10
	message += '; A^10 = ' + helpA + '; A^15 = ' + helpA * help2A;
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin29() {
	//Begin29. Дано значение угла α в градусах (0 < α < 360). Определить значение этого же угла в радианах, учитывая, что 180° = π радианов. В качестве значения π использовать 3.14
	let angle;
	angle = Number(prompt('Введите значение угла α в градусах(0 < α < 360):'));
	taskId = document.getElementById('begin29');
	message = '<p>Значение α в радианах: ' + angle * Math.PI / 180 + '</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin30() {
	//Begin30. Дано значение угла α в радианах (0 < α < 2·π). Определить значение этого же угла в градусах, учитывая, что 180° = π радианов. В качестве значения π использовать 3.14
	let angle;
	angle = Number(prompt('Введите значение угла α в радианах (0 < α < 2·π):'));
	taskId = document.getElementById('begin30');
	message = '<p>Значение α в градусах: ' + angle * 180 / Math.PI + '</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin31() {
	//Begin31. Дано значение температуры T в градусах Фаренгейта. Определить значение этой же температуры в градусах Цельсия. Температура по Цельсию T C и температура по Фаренгейту T F связаны следующим соотношением: T C = (T F – 32)·5/9.
	let T;
	T = Number(prompt('Введите значение температуры T в Фаренгейтах:'));
	taskId = document.getElementById('begin31');
	message = '<p>Температура T = ' + T + ' в Фаренгейтах = ' + (T - 32) * 5 / 9 + ' градусов Цельсия</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin32() {
	//Begin32. Дано значение температуры T в градусах Цельсия. Определить значение этой же температуры в градусах Фаренгейта. Температура по Цельсию T C и температура по Фаренгейту T F связаны следующим соотношением: T C = (T F – 32)·5/9..
	let T;
	T = Number(prompt('Введите значение температуры T в градусах Цельсия:'));
	taskId = document.getElementById('begin32');
	message = '<p>Температура T = ' + T + ' в градусах Цельсия = ' + (T * 9 / 5 + 32) + ' градусов Фаренгейта</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin33() {
	//Begin33. Известно, что X кг конфет стоит A рублей. Определить, сколько стоит 1 кг и Y кг этих же конфет
	let x, y, priceX, price1Kg;
	x = Number(prompt('Введите массу конфет:'));
	priceX = Number(prompt('Введите их стоимость:'));
	taskId = document.getElementById('begin33');
	price1Kg = priceX / x;
	y = Number(prompt('Введите сколько ещё нужно купить конфет'));
	message = '<p>К оплате за ' + y + ' кг. конфет: ' + price1Kg * y + ' руб.' + '</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin34() {
	//Begin34. Известно, что X кг шоколадных конфет стоит A рублей, а Y кг ирисок стоит B рублей. Определить, сколько стоит 1 кг шоколадных конфет, 1 кг ирисок, а также во сколько раз шоколадные конфеты дороже ирисок.
	let x, a, y, b;
	taskId = document.getElementById('begin34');
	x = Number(prompt('Введите массу шоколадных конфет(кг)'));
	a = Number(prompt('Введите их стоимость'));
	y = Number(prompt('Введите массу ирисок(кг)'));
	b = Number(prompt('Введите их стоимость'));
	message = '<p>Стоимость шоколадных конфет ' + (a / x).toFixed(2) + ' руб. за 1 кг., а стоиость ирисок ' + (b / y).toFixed(2) + ' руб. за кг. Шоколадные конфета дороже ирисок в ' + Math.round( a / x / (b / y) ) +  ' раз(а)</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin35() {
	//Begin35. Скорость лодки в стоячей воде V км/ч, скорость течения реки U км/ч (U < V). Время движения лодки по озеру T1 ч, а по реке (против течения) — T2 ч. Определить путь S, пройденный лодкой (путь = время · скорость). Учесть, что при движении против течения скорость лодки уменьшается на величину скорости течения
	let V, U, T1, T2, S;
	taskId = document.getElementById('begin35');
	V = Number(prompt('Введите скорость(км/ч) лодки'));
	U = Number(prompt('Введите скорость(км/ч) течения реки'));
	T1 = Number(prompt('Введите время(ч) движения лодки по озеру'));
	T2 = Number(prompt('Введите время(ч) движения лодки по реке против течения'));
	S = V * T1 + T2 * (V - U);
	message = '<p>Расстояние пройденное лодкой составляет ' + S + ' км.</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin36() {
	//Begin36. Скорость первого автомобиля V1 км/ч, второго — V2 км/ч, расстояние между ними S км. Определить расстояние между ними через T часов, если автомобили удаляются друг от друга. Данное расстояние равно сумме начального расстояния и общего пути, проделанного автомобилями; общий путь = время · суммарная скорость.
	let v1, v2, s, t;
	v1 = Number(prompt('Введите скорость(км/ч) первого авто'));
	v2 = Number(prompt('Введите скорость(км/ч) второго авто'));
	s = Number(prompt('Введите расстояние(км) между автомобилями'));
	t = Number(prompt('Введите время(ч)'));
	taskId = document.getElementById('begin36');
	message = '<p>Расстояние между двумя авто через ' + t + ' ч. составляет ' + (s + t * (v1 + v2)) + ' км.</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin37() {
	//Begin37. Скорость первого автомобиля V1 км/ч, второго — V2 км/ч, расстояние между ними S км. Определить расстояние между ними через T часов, если автомобили первоначально движутся навстречу друг другу. Данное расстояние равно модулю разности начального расстояния и общего пути, проделанного автомобилями; общий путь = время · суммарная скорость.
	let v1, v2, s, t;
	v1 = Number(prompt('Введите скорость(км/ч) первого авто'));
	v2 = Number(prompt('Введите скорость(км/ч) второго авто'));
	s = Number(prompt('Введите расстояние(км) между автомобилями'));
	t = Number(prompt('Введите время(ч)'));
	taskId = document.getElementById('begin37');
	message = '<p>Расстояние между двумя авто через ' + t + ' ч. составляет ' + Math.abs((s - t * (v1 + v2))) + ' км.</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin38() {
	//Begin38. Решить линейное уравнение A·x + B = 0, заданное своими коэффициентами A и B (коэффициент A не равен 0)
	let a, x, b;
	a = Number(prompt('Введите коэффициент a(a < 0 < a)'));
	b = Number(prompt('Введите коэффициент b'));
	x = -b / a;
	message = '<p>x = ' + x + '</p>';
	taskId = document.getElementById('begin38');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin39() {
	//Begin39. Найти корни квадратного уравнения A·x^2 + B·x + C = 0, заданного своими коэффициентами A, B, C (коэффициент A не равен 0), если известно, что дискриминант уравнения положителен. Вывести вначале меньший, а затем больший из найденных корней
	let a, x1, b, c, D, x2;
	a = Number(prompt('Введите коэффициент a(a < 0 < a)'));
	b = Number(prompt('Введите коэффициент b'));
	c = Number(prompt('Введите коэффициент c'));
	D = b * b - 4 * a * c;
	x1 = (-b - Math.sqrt(D)) / 2 * a;
	x2 = (-b + Math.sqrt(D)) / 2 * a;
	message = '<p>x1 = ' + x1 + '; x2 = ' + x2 + '</p>';
	taskId = document.getElementById('begin39');
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function begin40() {
	//Begin40. Найти решение системы линейных уравнений вида (A1·x + B1·y = C1, A2·x + B2·y = C2), заданной своими коэффициентами A1, B1, C1, A2, B2, C2, если известно, что данная система имеет единственное решение. Воспользоваться формулами x = (C1·B2 – C2·B1)/D, y = (A1·C2 – A2·C1)/D, где D = A1·B2 – A2·B1
	let a1, b1, c1, a2, b2, c2, D;
	a1 = Number(prompt('Введите значение коэффициента a1'));
	b1 = Number(prompt('Введите значение коэффициента b1'));
	c1 = Number(prompt('Введите значение коэффициента c1'));
	a2 = Number(prompt('Введите значение коэффициента a2'));
	b2 = Number(prompt('Введите значение коэффициента b2'));
	c2 = Number(prompt('Введите значение коэффициента c2'));
	D = a1 * b2 - a2 * b1;
	x = (c1 * b2 - c2 * b1) / D;
	y = (a1 * c2 - a2 * c1) / D;
	taskId = document.getElementById('begin40');
	message = '<p>x = ' + x + '; y = ' + y + '</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function integer1() {
	//Integer1. Дано расстояние L в сантиметрах. Используя операцию деления нацело, найти количество полных метров в нем (1 метр = 100 см).
	let l;
	l = Number(prompt('Введите значение в сантиметрах'));
	taskId = document.getElementById('integer1');
	message = '<p>В ' + l + ' сантиметрах ' + Math.floor(l / 100) + ' полных метров' + '</p>';
	console.log(taskId.getElementsByClassName('task__footer')[0]);
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}

function integer2() {
	//Integer2. Дана масса M в килограммах. Используя операцию деления нацело, найти количество полных тонн в ней (1 тонна = 1000 кг)
	let m;
	m = Number(prompt('Введите массу в килограммах'));
	taskId = document.getElementById('integer2');
	message = '<p>Количество полных тонн в ' + m + ' кг. = ' + Math.floor(m / 1000) + ' т.</p>';
	taskId.getElementsByClassName('task__footer')[0].innerHTML = message;
}