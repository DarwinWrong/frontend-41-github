let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let arr3 = [5, 6, 7, 8, 9];
let arr4 = [7, 8, 9, 10, 11];

let combined = [...arr1, ...arr2, ...arr3, ...arr4].sort((a, b) => b - a);
let uniqueElements = [...new Set(combined)];
let commonElements = arr1.filter(num => arr2.includes(num) && arr3.includes(num) && arr4.includes(num));

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let uniquePrimes = [...new Set(combined.filter(isPrime))];

console.log("Об'єднаний масив:", combined);
console.log("Унікальні елементи:", uniqueElements);
console.log("Спільні елементи:", commonElements);
console.log("Унікальні прості числа:", uniquePrimes);
