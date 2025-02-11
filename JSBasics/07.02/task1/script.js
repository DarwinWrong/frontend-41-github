const age = parseInt(prompt("Введіть ваш вік:"));
if (age >= 0 && age < 12) {
    console.log("Ви дитина.");
} else if (age >= 12 && age < 18) {
    console.log("Ви підліток.");
} else if (age >= 18 && age < 60) {
    console.log("Ви дорослий.");
} else if (age >= 60) {
    console.log("Ви пенсіонер.");
} else {
    console.log("Некоректний вік.");
}

const num = parseInt(prompt("Введіть число від 0 до 9:"));
const symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
console.log(symbols[num] ?? "Некоректне число.");

const threeDigitNumber = prompt("Введіть тризначне число:");
if (/^(\d)\1*$/g.test(threeDigitNumber)) {
    console.log("Всі цифри однакові.");
} else if (new Set(threeDigitNumber).size < threeDigitNumber.length) {
    console.log("Є однакові цифри.");
} else {
    console.log("Усі цифри різні.");
}

const year = parseInt(prompt("Введіть рік:"));
const isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
console.log(isLeapYear ? "Рік є високосним." : "Рік не є високосним.");

const fiveDigitNumber = prompt("Введіть п’ятирозрядне число:");
console.log(fiveDigitNumber === fiveDigitNumber.split('').reverse().join('')
    ? "Число є паліндромом."
    : "Число не є паліндромом.");
