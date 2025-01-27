const numbers = prompt("Введіть п’ятирозрядне число:");
if (numbers.length === 5 && 
    numbers === numbers.split('').reverse().join('')
) {
    console.log("Число є паліндромом");
} else {
    console.log("Число не є паліндромом");
}
