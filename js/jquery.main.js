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

// Деструктурирующее присваивание. Задачи.
(function () {
	// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
	function getObj(...arguments) {
		let [firstEl, ...other] = arguments;
		return {
			first: firstEl,
			other: other
		};
	}
	let qwe = getObj(12, 34, 3, 0, -4);
	console.log(qwe);

	// 2. Организовать функцию getInfo, которая принимает объект вида
	// { name: ...,  info: { employees: [...], partners: [ … ]  } }
	// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
	const organisation = {
		name: "p2H",
		info: {
			employees: [2000, 50000, 1000],
			partners: ["sony", "mazda", "nikon"]
		}
	}

	function getInfo(objDate) {
		const {
			name = "Unknown", info: {
				partners: [first, second]
			}
		} = objDate;
		return {
			Name: name,
			Partners: [first, second]
		};
	}
	let info = getInfo(organisation);
	console.log(info);
}());

// Функции стрелки. Задачи.
(function () {
	// 1. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
	function sum() {
		const params = Array.prototype.slice.call(arguments);

		if (!params.length) return 0;

		return params.reduce(function (prev, next) {
			return prev + next;
		});
	}

	const newSum = (...arguments) => arguments.reduce(function (prev, next) {
		return prev + next
	});
	let res = newSum(1, 2, 3, 4);
	console.log(res);
}());

// Функции высшего порядка. Задачи.
(function () {
	// 1.  Создать две функции и дать им осмысленные названия:
	// - первая функция принимает массив и колбэк (одна для всех вызовов)
	// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

	// Первая функция возвращает строку “New value: ” и результат обработки:

	// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
	// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
	// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
	// “New value: Jhon is 45, Aaron is 20,”
	// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

	// Подсказка: secondFunc должна быть представлена функцией, которая принимает
	// один аргумент (каждый элемент массива) и возвращает результат его обработки
	function getRes(arrDate, handler) {
		if (!Array.isArray(arrDate)) {
			console.error("wrong data writing style");
		} else {
			return handler(arrDate);
		}
	}

	// коллбек ф-я для преобразования эл. массива в одну строку
	const getItemsPlus = (arr) => {
		let res = "New value:";
		for (let item of arr) {
			res += " " + item;
		}
		return res;
	}

	// коллбек ф-я для умножения эл. массива и преобразования в одну строку
	const getItemsMulti = (arr) => {
		let res = "New value:";
		for (let item of arr) {
			res += " " + item * 10 + ",";
		}
		return res;
	}

	// коллбек ф-я для обработки данных из объектов и преобразование этих данных в одну строку
	const getItemsObj = (arr) => {
		let res = "New value:";
		for (let item of arr) {
			res += " " + item.name + " is " + item.age + ",";
		}
		return res;
	}

	let getResAll = getRes([{
		age: 45,
		name: "Jhon"
	}, {
		age: 20,
		name: "Aaron"
	}], getItemsObj);
	console.log(getResAll);

	// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
	// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

	function analogEvery(arrNumbers, func) {
		if (!Array.isArray(arrNumbers) || typeof func != "function") {
			console.error("wrong data writing style");
		} else {
			for (item of arrNumbers) {
				let resBool = func(item);
				if (!resBool) {
					return false;
				} else {
					return true;
				}
			}
		}
	}

	analogEveryCallback = (value) => {
		return value > 5;
		console.log(res);
	};

	let fff = analogEvery([3, 8, -5, -9, 1, 10], analogEveryCallback);
	console.log(fff);
}());

// Перебирающие методы. Задачи.
(function () {
	// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
	// каждый элемент которого будет хранить информацию о числе и его четности:
	// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
	let arr = [1, 2, 3, 5, 8, 9, 10],
		newArr = arr.map(function (item) {
			let obj = {
				digit: item,
				odd: null
			};
			if (item % 2 == 0) {
				obj.odd = false;
				return obj
			} else {
				obj.odd = true;
				return obj
			}
		});
	console.log(newArr);

	//  2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.
	let arr2 = [12, 4, 50, 1, 0, 18, 40];
	let newArr2 = arr2.some(function (item) {
		if (item == 0) {
			return false
		}
	});
	console.log(newArr2);

	//  3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
	let arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];
	let newArr3 = arr3.some(function (item) {
		return item.length > 3;
	});
	console.log(newArr3);

	// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

	// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
	// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
	// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

	// Напишите функцию, которая из элементов массива соберет и вернёт
	// строку, основываясь на index каждой буквы. Например:
	// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

	// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
	// строки
	let arr4 = [{
			char: "a",
			index: 12
		}, {
			char: "w",
			index: 8
		}, {
			char: "Y",
			index: 10
		}, {
			char: "p",
			index: 3
		}, {
			char: "p",
			index: 2
		},
		{
			char: "N",
			index: 6
		}, {
			char: " ",
			index: 5
		}, {
			char: "y",
			index: 4
		}, {
			char: "r",
			index: 13
		}, {
			char: "H",
			index: 0
		},
		{
			char: "e",
			index: 11
		}, {
			char: "a",
			index: 1
		}, {
			char: " ",
			index: 9
		}, {
			char: "!",
			index: 14
		}, {
			char: "e",
			index: 7
		}
	]

	let newArr4 = [];
	arr4.forEach(function (item, ind, arr) {
		for (let i = 0; i < arr.length; i++) {
			if (item.index == i) {
				newArr4[i] = item;
			}
		}
	});
	console.log(newArr4);
	newArr4 = newArr4.map(function (item) {
		return item.char;
	});
	console.log(newArr4);

	newArr4 = newArr4.reduce(function (acc, val) {
		return acc + val;
	});
	console.log(newArr4);
}());

// Метод Sort. Задачи.
(function () {
	// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
	let arrMain = [
		[14, 45],
		[1],
		['a', 'c', 'd']
	];
	arrMain.sort(function (previous, next) {
		return previous.length - next.length;
	});
	console.log(arrMain);

	// 2. Есть массив объектов:
	// [
	// 	{cpu: 'intel', info: {cores:2, сache: 3}},
	// 	{cpu: 'intel', info: {cores:4, сache: 4}},
	// 	{cpu: 'amd', info: {cores:1, сache: 1}},
	// 	{cpu: 'intel', info: {cores:3, сache: 2}},
	// 	{cpu: 'amd', info: {cores:4, сache: 2}}
	// ]

	// Отсортировать их по возрастающему количеству ядер (cores).

	let arrBig = [{
			cpu: 'intel',
			info: {
				cores: 2,
				сache: 3
			}
		},
		{
			cpu: 'intel',
			info: {
				cores: 4,
				сache: 4
			}
		},
		{
			cpu: 'amd',
			info: {
				cores: 1,
				сache: 1
			}
		},
		{
			cpu: 'intel',
			info: {
				cores: 3,
				сache: 2
			}
		},
		{
			cpu: 'amd',
			info: {
				cores: 4,
				сache: 2
			}
		}
	]
	arrBig.sort(function (previous, next) {
		return previous.info.cores - next.info.cores;
	});
	console.log(arrBig);

	// 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

	// let products = [
	// 	{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
	// 	{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
	// 	{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
	// 	{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
	// ];

	// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
	let products = [{
			title: 'prod1',
			price: 5.2
		}, {
			title: 'prod2',
			price: 0.18
		},
		{
			title: 'prod3',
			price: 15
		}, {
			title: 'prod4',
			price: 25
		},
		{
			title: 'prod5',
			price: 18.9
		}, {
			title: 'prod6',
			price: 8
		},
		{
			title: 'prod7',
			price: 19
		}, {
			title: 'prod8',
			price: 63
		}
	];

	function getPrice(array, minPrice, maxPrice) {
		let newArrPrice = array.filter(function (item) {
			return minPrice < item.price && item.price < maxPrice;
		});
		return newArrPrice.sort(function (prev, next) {
			return prev.price - next.price;
		});
	}
	let listPrice = getPrice(products, 1, 20);
	console.log(listPrice);
}());