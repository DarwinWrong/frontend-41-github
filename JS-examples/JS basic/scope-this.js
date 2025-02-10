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

// ************************** CONTEXT **************************

function sayHello(name) {
    let greeting = "Hello, " + name;
    console.log(greeting);
}

sayHello("Alice");
sayHello("Bob");

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

// ************************ THIS **************************

// console.log(this); // В браузері: Window, в Node.js: Global

const user = {
    name: "Alice",
    sayHi() {
        console.log("Привіт, " + this.name);
    }
};

user.sayHi();

const hi = user.sayHi;
hi();

window.name = "Global";
hi();

// **********************
const button = document.querySelector("button");
button.addEventListener("click", function () {
    console.log(this); // button
});
// =========================================================