// Преобразование примитивов. Задачи.
(function () {
	// Чему равно а, почему ?
	// let a = 0 || 'string',     a = "string"     потому что "или" запинается на правде
	// a = 1 && 'string',         a = "string"     так как false тут нет переменная равна последнему значению в условии
	// a = null || 25,            a = 25         
	// a = null && 25,            a = null          потому что "и" запинается на лжи 
	// a = null || 0 || 35,       a = 35
	// a = null && 0 && 35;       a = null

	// Что отобразится в консоли.Почему ? 
	// 12 + 14 + '12' = 38         так как '12' неявно преобразуется в чмсло
	// 3 + 2 - '1' = 4
	// '3' + 2 - 1 true + 2 + '10' + 1 undefined + 2 null + 5 true + undefined  пока не понятно
}());

//СТРОКИ
(function () {
	let string = 'some test string';

	// 1. Получить первую и последнюю буквы строки

	//получение первого символа
	console.log(string[0]);
	//или
	console.log(string.slice(0, 1));

	// получение последнего символа
	console.log(string[string.length - 1]);
	//или
	console.log(string.slice(string.length - 1));

	//2. Сделать первую и последнюю буквы в верхнем регистре

	// изменение первой буквы строки в верхний регистр
	console.log(string.replace(string[0], string[0].toUpperCase()));

	//изменения последней буквы
	console.log(string[string.length - 1].toUpperCase());

	// 3. Найти положение слова ‘string’ в строке
	console.log(string.indexOf('string'));

	//4. Найти положение второго пробела (“вручную” ничего не считать) 
	console.log(string.lastIndexOf(' '));
	//или
	console.log(string.indexOf(' ', string.indexOf(' ') + 1));

	// 5. Получить строку с 5-го символа длиной 4 буквы
	console.log(string.substr(5, 4));

	// 6. Получить строку с 5-го по 9-й символы 
	console.log(string.slice(5, 10));

	// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов) 
	console.log(string.slice(0, -6));

	// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
	let a = 20,
		b = 16;
	console.log(String(a) + String(b));
}());


// ЧИСЛА
(function () {
	// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
	console.log(Math.PI.toFixed(2));

	// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
	console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
	console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));

	// 3. Работа с Math.random:  

	// a. Получить случайное число и округлить его до двух цифр после запятой
	console.log(Math.random().toFixed(2));

	// b. Получить случайное целое число от 0 до 10.
	console.log(Math.floor(Math.random() * 11));

	// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
	console.log((0.6 * 10 + 0.7 * 10) / 10);

	// 5. Получить число из строки ‘100$’
	console.log(parseInt('100%'));
}());


// IF else. Задачи

(function () {
	// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”. 
	let string = "hidden";
	if (string == "hidden") {
		string = "visible";
	} else {
		string = "hidden";
	}

	// 2. Используя if, записать условие:
	// a. если переменная равна нулю, присвоить ей 1;
	// b. если меньше нуля - строку “less then zero”;
	// c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись). 
	let val;
	if (val === 0) {
		val = 1;
	} else if (val < 0) {
		val = "less then zero";
	} else if (val > 0) {
		val *= 10;
	}

	// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. 

	let car = {
		name: 'Lexus',
		age: 10,
		create: 2008,
		needRepair: false
	};

	if (car.age > 5) {
		car.needRepair = true;
		console.log('Need Repair', car.needRepair);
	} else {
		car.needRepair = false;
	}

	// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }. Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
	let item = {
		name: 'Intel core i7',
		price: '100$',
		discount: '15%'
	}

	if (item.discount && item.discount != undefined && item.discount != null) {
		item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price) * parseFloat(item.discount) / 100);
		console.log(item.priceWithDiscount);
	} else {
		console.log(item.price);
	}

	// 5. Дан следующий код: let product = {     name: “Яблоко”,     price: “10$” }; let min = 10; // минимальная цена let max = 20; // максимальная цена Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

	let product = {
			name: "Яблоко",
			price: "10$"
		},
		min = 10, // минимальная цена
		max = 20; // максимальная цена

	if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
		console.log(product.price);
	} else {
		console.log('товаров не найдено');
	}
}());

// ОБЪЕКТЫ. ЗАДАЧИ.

// 1. Создать объект с полем product, равным ‘iphone’
(function () {
	const obj = {
		product: "iphone"
	}

	// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
	obj.price = 1000;
	obj.currency = "dollar";

	// 3. Добавить поле details, которое будет содержать объект с полями model и color
	obj.details = {}
	obj.model = null;
	obj.color = null;
}());

// Тернарный оператор. Switch case. Задачи.
(function () {
	// 1. Записать в виде switch case следующее условие: if (a === ‘block’) { console.log(‘block’) } else if (a === ‘none’) { console.log(‘none’) } else if (a === ‘inline’) { console.log(‘inline’) } else { console.log(‘other’) } Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение. 
	let a = "none";
	switch (a) {
		case "block":
			console.log("block");
			break;
		case "none":
			console.log("none");
			break;
		case "inline":
			console.log("inline");
			break;
		default:
			console.log("other");
	}
}());

//2. Из задач по условному оператору оператора. 2. if else выполнить задачи 1, 2 и 3 в виде тернарного
// a. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let value = "none";
value == "hidden" ? value = "visible" : value = "hidden";
console.log(value);

// b. Записать условие: a. b. c.  если переменная равна нулю, присвоить ей 1; если меньше нуля - строку “less then zero”; если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись)
let value1 = -5;
value1 == 0 ? value1 = 1 : value1 < 0 ? value1 = "less then zero" : value1 > 0 ? value1 *= 10 : value1 = value1;
console.log(value1);

// c. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false
};
car["age"] > 5 ? (console.log("Need Repair"), car["needRepair"] = true) : car["needRepair"] = false;

// ЦИКЛЫ. ЗАДАЧИ.
(function () {
	// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
	let string = "i am in the easycode",
		newString = "";

	// при помощи цикла while
	let i = 0;
	while (i < string.length) {
		if (i != 0 && string[i - 1] !== " ") {
			newString = newString.concat(string[i]);
		} else if (i == 0 || string[i - 1] == " ") {
			newString = newString.concat(string[i].toUpperCase());
		}
		i++;
	}

	//  при помощи цикла for и  методов split() и  join()
	let arrString = string.split('');

	for (let i = 0; i < arrString.length; i++) {
		if (i == 0 || arrString[i - 1] == " ") {
			arrString[i] = arrString[i].toUpperCase();
		}
	}
	arrString = arrString.join('');

	// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд). 
	// при помощи цикла для массивов for of
	let string2 = "tseb eht ma i";
	let arrString2 = string2.split('');
	let arrString3 = [];
	console.log(arrString2);
	for (let i of arrString2) {
		console.log(i);
		arrString3.unshift(i);
	}
	arrString3 = arrString3.join('');

	// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for. 
	let factorial = 1;
	for (let i = 1; i <= 10; i++) {
		console.log(i);
		factorial *= i;
	}

	// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
	let oldString = "JavaScript is a pretty good language",
		newString2 = "";
	for (let i = 0; i < oldString.length; i++) {
		if (oldString[i] == " ") {
			newString2 = newString2.concat(oldString[i + 1].toUpperCase());
		} else if (oldString[i - 1] == " ") {
			continue;
		} else if (oldString[i] !== " ") {
			newString2 = newString2.concat(oldString[i]);
		}
	}

	// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
	let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		oddNumbers = [];
	for (let value of arrayNumbers) {
		if (value % 2 != 0) {
			oddNumbers.push(value);
		}
	}
	console.log(oddNumbers);

	// 6. Дан объект: let list = {      name: ‘denis’,      work: ‘easycode’,      age: 29 } Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
	let list = {
		name: "denis",
		work: "easycode",
		age: 29
	};
	for (let item in list) {
		if (typeof list[item] == "string") {
			list[item] = list[item].toUpperCase();
		} else {
			continue;
		}
	}
}());