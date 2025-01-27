let globalVar = "Це глобальна змінна";
function myFunction() {
    let localVar = "Це локальна змінна";
    console.log(globalVar); // доступ до глобальної змінної
    console.log(localVar); // доступ до локальної змінної
}

myFunction();

console.log(globalVar); // доступ до глобальної змінної
// console.log(localVar); // помилка: localVar не визначена за межами функції

if (true) {
    var x = 100;
}
console.log(x); // 100 (змінна доступна поза блоком)

for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // 3 (змінна досі існує)

// =======================Function========================
function testVar() {
    if (true) { // без блоку буде помилка
        var x = 10; // Змінна видима у всій функції
    }
    console.log(x); // 10
}
testVar();

// ======================Block=========================
if (true) {
    let y = 20; // Змінна видима тільки всередині цього блоку
    const z = 30;
    console.log(y); // 20
    console.log(z); // 30
}

console.log(y); // Помилка: y не визначена
console.log(z); // Помилка: z не визначена

// ====================Cycle===========================
for (let i = 0; i < 5; i++) {
    console.log(i); // Виведе числа від 0 до 4
}

console.log(i); // Помилка: i не визначена

// here i does exist
for (var i = 0; i < arguments.length; i++) { // here i exists normally
}
// and here i still exists

// here i does not exist
for (let i = 0; i < arguments.length; i++) { // here i exists
}
// and here i does not exist