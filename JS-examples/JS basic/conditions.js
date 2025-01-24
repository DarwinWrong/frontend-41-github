let number = 5;
if (number > 0) {
    console.log("Число більше за нуль");
}

// ================================================
let number2 = -3;
if (number2 > 0) {
    console.log("Число більше за нуль");
} else {
    console.log("Число менше або рівне нулю");
}

// ================================================
let number3 = 10;
let result = (number3 > 0) ? "Число позитивне" : "Число не позитивне";
console.log(result);

// ================================================
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Це банан");
        break;
    case "apple":
        console.log("Це яблуко");
        break;
    case "orange":
        console.log("Це апельсин");
        break;
    default:
        console.log("Невідомий фрукт");
}
