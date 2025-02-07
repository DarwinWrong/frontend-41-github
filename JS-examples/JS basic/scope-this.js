let a;
let b;
let d = 5;
function myFun() {
    let b;
    a = true; // global a
    b = 10; // local b rewrite
    console.log('b', b)
}
myFun()
console.log(a) // true
console.log(b) // undefined
console.log(d) // 5

// global scope
const c = 5;
function myFn() {
    // myFn scope
    function innerFn() {
        console.log(c) // innerFn scope 5
    }

    innerFn()
}
// innerFn()// error
myFn()

// ************************** CONTEXT **************************

console.log(this); // В браузері: Window, в Node.js: Global

function sayHello(name) {
    let greeting = "Hello, " + name; // Локальна змінна
    console.log(greeting);
}

sayHello("Alice");
sayHello("Bob");

function outer() {
    let outerVar = "Я зовнішня змінна";

    function inner() {
        let innerVar = "Я внутрішня змінна";
        console.log(outerVar); // Доступ до змінної з зовнішнього контексту
        console.log(innerVar);
    }

    inner();
}

outer();

// ************************ THIS **************************
const user = {
    name: "Alice",
    sayHi() {
        console.log("Привіт, " + this.name);
    }
};

user.sayHi(); // "Привіт, Alice"

// **********************
const hi = user.sayHi; // Копіюємо функцію
hi(); // виклик без обєкта, this стає window, window.name порожній, "Привіт, undefined"

window.name = "Global";
hi(); // "Привіт, Global"

// **********************
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//     console.log(this); // button
// });
// =========================================================