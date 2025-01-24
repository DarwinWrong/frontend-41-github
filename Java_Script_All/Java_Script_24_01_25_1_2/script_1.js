// 1. Визначення категорії віку
function runTask1() {
    const age = parseInt(prompt("Скільки вам років?"));

    if (age >= 0 && age <= 12) {
        console.log("Ви дитина.");
    } else if (age > 12 && age <= 18) {
        console.log("Ви підліток.");
    } else if (age > 18 && age <= 60) {
        console.log("Ви дорослий.");
    } else if (age > 60) {
        console.log("Ви пенсіонер.");
    } else {
        console.log("Некоректний вік.");
    }
}

// 2. Виведення спеціального символу для числа на клавіші
function runTask2() {
    const number = prompt("Введіть число від 0 до 9:");

    switch (number) {
        case '1':
            console.log("!");
            break;
        case '2':
            console.log("@");
            break;
        case '3':
            console.log("#");
            break;
        case '4':
            console.log("$");
            break;
        case '5':
            console.log("%");
            break;
        case '6':
            console.log("^");
            break;
        case '7':
            console.log("&");
            break;
        case '8':
            console.log("*");
            break;
        case '9':
            console.log("(");
            break;
        case '0':
            console.log(")");
            break;
        default:
            console.log("Введіть число від 0 до 9.");
    }
}

// 3. Перевірка тризначного числа на однакові цифри
function runTask3() {
    const numberThreeDigit = prompt("Введіть тризначне число:");

    if (numberThreeDigit.length === 3) {
        if (numberThreeDigit[0] === numberThreeDigit[1] || numberThreeDigit[1] === numberThreeDigit[2] || numberThreeDigit[0] === numberThreeDigit[2]) {
            console.log("Число містить однакові цифри.");
        } else {
            console.log("Число не містить однакових цифр.");
        }
    } else {
        console.log("Будь ласка, введіть тризначне число.");
    }
}

// 4. Перевірка року на високосність
function runTask4() {
    const year = prompt("Введіть рік:");

    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        console.log("Це високосний рік.");
    } else {
        console.log("Це не високосний рік.");
    }
}

// 5. Перевірка п’ятирозрядного числа на паліндром
function runTask5() {
    const fiveDigitNumber = prompt("Введіть п’ятирозрядне число:");

    if (fiveDigitNumber.length === 5) {
        if (fiveDigitNumber[0] === fiveDigitNumber[4] && fiveDigitNumber[1] === fiveDigitNumber[3]) {
            console.log("Число є паліндромом.");
        } else {
            console.log("Число не є паліндромом.");
        }
    } else {
        console.log("Будь ласка, введіть п’ятирозрядне число.");
    }
}
