// Область видимості(Scope)
// Область видимості визначає, де можна отримати доступ до змінної або функції.

// Глобальна область видимості — змінні, створені поза функціями, доступні у всій програмі.
// Локальна область видимості — змінні, створені всередині функцій, доступні тільки в межах цієї функції.
// Блокова область видимості — змінні, оголошені через let або const всередині блоку { }, доступні тільки в цьому блоці.

let a;
let b;
let d = 5;

function myFun() {
    let b; // local scope "b"
    a = true; // rewrite global scope "a"
    b = 10; // rewrite local scope "b"
    console.log('b', b); // output 10
}

myFun()

console.log("a", a); // output true
console.log("b", b); // undefined
console.log("d", d); // output 5

// ================================================================
// ================================================================
// global scope
const c = 5;

function myFn() {
    // myFn scope
    function innerFn() {
        console.log(c) // innerFn scope 5
    }

    innerFn()
}

myFn()

// ================================================================
// ================================================================
function sayHello(name) {
    let greeting = "Hello, " + name;
    console.log(greeting);
}

sayHello("Alice");
sayHello("Bob");

// ================================================================
// ================================================================
function outer() {
    let outerVar = "Я зовнішня змінна";

    function inner() {
        let innerVar = "Я внутрішня змінна";
        console.log(outerVar);
        console.log(innerVar);
    }

    inner();
}

outer();