let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let arr3 = [5, 6, 7, 8, 9];
let arr4 = [7, 8, 9, 10, 11];

let combined = arr1.concat(arr2, arr3, arr4).sort((a, b) => b - a)
console.log(combined);

let unique = []
for (let i = 0; i < combined.length; i++){
    if (unique.indexOf(combined[i]) === -1) {
        unique.push(combined[i])
    }
}
console.log(unique);

let common = arr1.filter(number => arr2.includes(number) && arr3.includes(number) && arr4.includes(number))
console.log(common);

function isPrime(number) {
    if (number <= 1) return false
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    return true
}
let primeNumbers = unique.filter(isPrime);
console.log(primeNumbers)