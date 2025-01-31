// ************************** RECURSION **************************
function countdown(n) {
    if (n <= 0) {  // Базовий випадок: коли n досягає 0, зупиняємось
        console.log("🚀 Старт!");
        return;
    }

    console.log(n);  // Виводимо поточне значення n
    countdown(n - 1);  // Рекурсивний виклик із зменшеним n
}

countdown(5);

function sumTo(n) {
    if (n === 0) return 0; // Базовий випадок: якщо n = 0, сума теж 0

    return n + sumTo(n - 1); // Додаємо n до суми менших чисел
}

console.log(sumTo(5)); // 15


function countUp(n, current = 1) {
    if (current > n) return; // Базовий випадок: коли current дорівнює n, зупиняємось

    console.log(current);  // Виводимо поточне значення current
    countUP(n, current ++);  // Рекурсивний виклик ��з збільшеним current
}
countUp(5);

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