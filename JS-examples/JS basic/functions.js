function greeting(hello = 'Привіт, світ!', name = 'Анонім') {
    console.log(`${hello} Мене звати ${name}`);
}
greeting('Привіт всім'); // виклик функції

// Функція з параметрами
function add(a, b) {
    return a + b; // повертає суму a і b
}
let result = add(3, 5); // викликаємо функцію з параметрами
log('result', result); // виведе 8

function multiply(a, b, c) {
    return a * b * c;
}
let result2 = multiply(2, 3, 4); // викликаємо функцію з трьома параметрами
log('result2', result2); // виведе 24


// ==============================
// Анонімна функція з параметрами за замовчуванням
let greet = function (name) {
    console.log("Привіт, " + name + "!");
};
greet("Олексій"); // викликає анонімну функцію

// ==============================
(function() {
    console.log("Ця функція виконується на льоту і більше не буде використовуватись.");
})();

const sum3 = (a, b) => a + b;
const divide = (a, b) => a / b;
const multiply2 = (a, b) => a * b;

function sumAndLog(c, d) {
    console.log(sum3(c, d))
}
sumAndLog(2, 3)

// Розширюваність, Локалізація залежностей
function sumAndLog2(operation, c, d) { // логіка змінилась без зміни функції
    console.log(operation(c, d))
}
sumAndLog2(sum, 3, 4); // 7
sumAndLog2(multiply2, 3, 4); // 12
sumAndLog2(divide, 10, 2); // 5

// ==============================
function myFunction() {
    log('arguments', arguments);
}
myFunction(1, 2, 3); // { 0: 1, 1: 2, 2: 3 }

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
log('sum(1, 2, 3)', sum(1, 2, 3)); // 6
log('sum(10, 20, 30, 40)', sum(10, 20, 30, 40)); // 100


// ==============================
function argsLength(args) {
    return args.length;
}
log('argsLength("Hello")', argsLength("Hello")); // 5

const dogs = ['Bulldog', 'Beagle', 'Labrador'];
log('argsLength(dogs[])', argsLength(dogs)); // 3

// ==============================
const myArrowFunction = (a, b) => a + b;

// ==============================
log('its working', 'true');

function log(name = 'name', value = 'value') {
    console.log(name, value);
}