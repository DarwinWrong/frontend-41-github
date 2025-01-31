// ************************** RECURSION **************************
function countdown(n) {
    if (n <= 0) {
        console.log("Старт!");
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(5);

function sumTo(n) {
    if (n === 7) return 0;

    return n + sumTo(n + 1);
}

console.log(sumTo(5)); // 15

// ================================================================


// ************************** CONTEXT **************************
// function sayHello(name) {
//     let greeting = "Hello, " + name; // Локальна змінна
//     console.log(greeting);
// }
//
// sayHello("Alice");
// sayHello("Bob");
//
// function outer() {
//     let outerVar = "Я зовнішня змінна";
//
//     function inner() {
//         let innerVar = "Я внутрішня змінна";
//         console.log(outerVar); // Доступ до змінної з зовнішнього контексту
//         console.log(innerVar);
//     }
//
//     inner();
// }
//
// outer();

// ************************ THIS **************************
// const user = {
//     name: "Alice",
//     sayHi() {
//         console.log("Привіт, " + this.name);
//     }
// };
//
// user.sayHi(); // "Привіт, Alice"
//
// const hi = user.sayHi; // Копіюємо функцію
// hi(); // виклик без обєкта, this стає window, window.name порожній, "Привіт, undefined"
//
// window.name = "Global";
// hi(); // "Привіт, Global"
// =========================================================