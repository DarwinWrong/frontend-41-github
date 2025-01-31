
let purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));
let discount = purchaseAmount >= 500 ? 0.07 : 
              purchaseAmount >= 300 ? 0.05 : 
              purchaseAmount >= 200 ? 0.03 : 0;
let totalAmount = purchaseAmount * (1 - discount);
console.log(`Сума до сплати зі знижкою: ${totalAmount.toFixed(2)}`);


let score = 0;
let answer1 = prompt("Якого кольору небо? (1: Синє, 2: Червоне, 3: Зелене)");
if (answer1 === "1") score += 2;
let answer2 = prompt("Скільки ніг у павука? (1: Шість, 2: Вісім, 3: Десять)");
if (answer2 === "2") score += 2;
let answer3 = prompt("Скільки планет у Сонячній системі? (1: Вісім, 2: Дев'ять, 3: Сім)");
if (answer3 === "1") score += 2;
console.log(`Ви набрали ${score} балів.`);


let hungerLevel = 10;
let wallet = 100;
let pizzaAvailable = null;
let mood = "😐";


if (hungerLevel !== 0) {
    console.log("🍕 Я дуже хочу піцу! Голодування — це не про мене!");
} else {
    console.log("👌 Я ситий і готовий до кодування!");
}

let availablePizza = pizzaAvailable ?? "На жаль, сьогодні без піци... 😢";
console.log(`🔍 Результат пошуку піци: ${availablePizza}`);


let buyPizza = wallet >= 50 && hungerLevel > 5;
if (buyPizza) {
    console.log("💸 Трата виправдана, піца того варта!");
    wallet -= 50;
    hungerLevel -= 7;
    mood = "😋";
} else {
    console.log("🤑 Ні-ні, гроші краще зберегти!");
}


let snackPrice = wallet < 50 || "Закуска не по кишені...";
console.log(`🥪 Альтернатива піці: ${wallet >= 20 ? 'Взяв дешеву закуску' : snackPrice}`);


let energyLevel = 8;
energyLevel -= 5;
console.log(`🚶‍♂️ Енергія після пошуків: ${energyLevel}`);
if (energyLevel > 3) {
    console.log("💪 Йду гуляти! Енергії вистачить!");
    energyLevel += 3;
} else {
    console.log("😴 Лежу вдома, сил немає...");
}


let daySummary = mood === "😋" || "День був звичайним";
let finalMood = daySummary ?? "Взагалі все було сумно...";
console.log(`📅 Підсумок дня: ${finalMood}`);


if (pizzaAvailable) {
    hungerLevel *= 0.5;
    console.log(`🍕 Голод тепер на рівні: ${hungerLevel}`);
} else {
    console.log("❌ Піцу так і не знайшов...");
}


console.log(`🌙 Лягаю спати. Мій гаманець: ${wallet}, настрій: ${mood}`);
