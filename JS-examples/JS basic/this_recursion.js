// ************************** RECURSION **************************
function sumTo(n) {
    if (n === 7) return 0;

    return n + sumTo(n + 1);
}

console.log(sumTo(3)); // 3 + 4 + 5 + 6 = 18
console.log(sumTo(1)); // 1 + 2 + 3 + 4 + 5 + 6 = 21

// 3 + sumTo(4)
//   → 4 + sumTo(5)
//     → 5 + sumTo(6)
//       → 6 + sumTo(7) // sumTo(7) повертає 0
//         → 6 + 0 = 6
//       → 5 + 6 = 11
//     → 4 + 11 = 15
//   → 3 + 15 = 18

// sumTo(3)  ←  чекає на sumTo(4)
// |
// v
// sumTo(4)  ←  чекає на sumTo(5)
// |
// v
// sumTo(5)  ←  чекає на sumTo(6)
// |
// v
// sumTo(6)  ←  чекає на sumTo(7)
// |
// v
// sumTo(7)  ←  повертає 0

function arrayFromAToB(a, b, arr = []) {
    if(a < 0 || b <= 0) return "B should be greater than A";
    if (a > b) return arr;

    arr.push(a);
    return arrayFromAToB(a + 1, b, arr);
}

console.log(arrayFromAToB(3, 0))


function countdown(n) {
    if (n <= 0) {
        console.log("Старт!");
        return;
    }

    console.log(n);
    countdown(n - 1);
}

countdown(5);

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