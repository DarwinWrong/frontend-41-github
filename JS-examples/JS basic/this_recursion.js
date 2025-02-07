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


// function unionWords(words = [], text = "", count = 0) {
//     if (words.length === count) return "finish";
//     for (count; count < words.length; count++) {
//         text = words[count]
//     }
// }

// ================================================================
