function outputLog(varName) {
    const name = Object.keys({ varName })?.[0];
    console.log(name, varName);
}

/**************** Синтаксис JavaScript ********************/
let MyVariable = 10;
let myvariable = 20;
console.log('MyVariable', MyVariable); // Виведе 10
console.log('myvariable', myvariable); // Виведе 20


/**************** Однорядкові коментарі: ********************/
// Це однорядковий коментар
console.log('Hello, world!');
/**************** Багаторядкові коментарі: ********************/
/*
Це багаторядковий коментар,
який може займати кілька рядків.
*/
console.log('Hello, world!');


/**************** Ключові та зарезервовані слова ********************/
// const function = "Hello";
// console.log('var', var);


/**************** Змінні та типи даних ********************/
// Hoisting з var
// console.log(a); // undefined (hoisting відбувається, але значення ще не присвоєно)
var a = 5;
console.log(a); // 5

// Hoisting з let
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

// Hoisting з const
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;
console.log(c); // 15

// Hoisting порівняння: var, let, const
function test() {
    console.log(a); // undefined (var піднята)
    console.log(b); // ReferenceError (let у тимчасовій мертвій зоні)
    console.log(c); // ReferenceError (const у тимчасовій мертвій зоні)

    var a = 1;
    let b = 2;
    const c = 3;
}
// test();

// Область видимості з var
if (true) {
    var x = 20;
}
console.log('x', x); // 20 (доступна поза блоком, оскільки має функціональну область видимості)

var x = 30;
if (true) {
    var x = 20;
}
var x = 10;
outputLog(x); // 10

// Область видимості з let
let y = 30;
if (true) {
    let y = 25;
    outputLog(y);
}
outputLog(y); // ReferenceError: y is not defined (доступна тільки всередині блоку)

// Область видимості з const
if (true) {
    const z = 30;
}
// outputLog(z); // ReferenceError: z is not defined (доступна тільки всередині блоку)
