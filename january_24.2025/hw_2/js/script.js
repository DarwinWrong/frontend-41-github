
function calculateDiscount() {
    let amount = parseFloat(prompt("Введіть суму покупки:"));
    let discount = amount >= 500 ? 0.07 : amount >= 300 ? 0.05 : amount >= 200 ? 0.03 : 0;
    let finalPrice = amount - (amount * discount);
    
    console.log(`Сума до сплати зі знижкою: ${finalPrice.toFixed(2)} грн`);
}

function quizGame() {
    let score = 0;

    let answer1 = prompt("Яка столиця України?\n1) Львів\n2) Київ\n3) Харків");
    if (answer1 === "2") score += 2;

    let answer2 = prompt("Скільки континентів на Землі?\n1) 5\n2) 6\n3) 7");
    if (answer2 === "3") score += 2;

    let answer3 = prompt("Який колір має небо?\n1) Червоний\n2) Синій\n3) Зелений");
    if (answer3 === "2") score += 2;

    console.log(`Ви набрали ${score} балів.`);
}

function codeTownAdventure() {
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
    console.log(`🥪 Альтернатива піці: ${wallet >= 20 ? "Взяв дешеву закуску" : snackPrice}`);

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
}

calculateDiscount();
quizGame();
codeTownAdventure();
