let potions = [
    { name: "Зілля сили", effect: "Збільшує силу", price: 50, quantity: 10 },
    { name: "Зілля невидимості", effect: "Робить невидимим", price: 80, quantity: 5 },
    { name: "Зілля швидкості", effect: "Збільшує швидкість", price: 70, quantity: 8 },
    { name: "Зілля здоров'я", effect: "Відновлює здоров'я", price: 60, quantity: 10 },
    { name: "Зілля мани", effect: "Відновлює ману", price: 40, quantity: 12 }
];

potions = potions.filter(potion => potion.name !== "Зілля невидимості");

potions.unshift({ name: "Зілля розуму", effect: "Збільшує інтелект", price: 90, quantity: 4 });

let extraPotions = [
    { name: "Зілля удачі", effect: "Приносить удачу", price: 120, quantity: 6 },
    { name: "Зілля відваги", effect: "Додає хоробрість", price: 75, quantity: 7 }
];

potions = potions.concat(extraPotions);

potions.forEach(potion => {
    if (potion.name === "Зілля здоров'я") {
        potion.quantity -= 2;
    }
});

let potionDescriptions = potions.map(potion => 
    `${potion.name}: ${potion.effect} (${potion.price} золотих), в наявності: ${potion.quantity} шт.`
);

let potionNames = potions.map(potion => potion.name).join(", ");

potions.sort((a, b) => a.price - b.price);

let hasManaPotion = potions.some(potion => potion.name === "Зілля мани");

let expensivePotions = potions.filter(potion => potion.price > 60);

let topPotions = potions.filter(potion => potion.price > 70).slice(0, 3);

function displayPotions() {
    const list = document.getElementById("potions-list");
    list.innerHTML = ""; 

    potions.forEach(potion => {
        const li = document.createElement("li");
        li.innerHTML = `
            <p><strong>${potion.name}</strong></p>
            <p>${potion.effect}</p>
            <p class="price">Ціна: ${potion.price} золотих</p>
            <p class="quantity">В наявності: ${potion.quantity} шт.</p>
        `;
        list.appendChild(li);
    });
}

displayPotions();

console.log("Оновлений список зіль:", potions);
console.log("Опис зіль:", potionDescriptions);
console.log("Назви зіль:", potionNames);
console.log("Чи є 'Зілля мани'?:", hasManaPotion);
console.log("Зілля понад 60 золотих:", expensivePotions);
console.log("Топ-3 найдорожчі зілля:", topPotions);
