const year = prompt("Введіть рік:");
const isLeapYear = (year % 400 === 0 || (year % 4 === 0 & year % 100 !== 0)) ? true : false;
console.log(isLeapYear ? "Рік високосний." : "Рік не є високосним.");