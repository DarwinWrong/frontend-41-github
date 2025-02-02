/**************** Арифметичні оператори ********************/
// додавання:
let sum = 5 + 3;  // 8
// віднімання:
let difference = 10 - 6;  // 4
// множення:
let product = 4 * 7;  // 28
// ділення:
let quotient = 20 / 5;  // 4
// залишок від ділення:
let remainder = 10 % 3;  // 1
// піднесення до степеня:
let power = 2 ** 3;  // 8

/**************** Оператори відношень ********************/
// > — більше:
console.log(5 > 3); // true
// < — менше:
console.log(5 < 3); // false
// >= — більше або дорівнює:
console.log(5 >= 5); // true
// <= — менше або дорівнює:
console.log(3 <= 5); // true
// == — дорівнює (без врахування типу):
console.log(5 == '5'); // true
// === — дорівнює (з врахуванням типу):
console.log(5 === '5'); // false
// != — не дорівнює (без врахування типу):
console.log(5 != '5'); // false
// !== — не дорівнює (з врахуванням типу):
console.log(5 !== '5'); // true

/**************** Логічні оператори ********************/
// && — логічне І (AND):
console.log(true && false); // false
// || — логічне АБО (OR):
console.log(true || false); // true
// ! — логічне НЕ (NOT):
console.log(!true); // false

/**************** Оператор typeof ********************/
console.log(typeof 42); // 'number'
console.log(typeof 'Hello'); // 'string'
console.log(typeof true); // 'boolean'