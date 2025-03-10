let potions = [
    { name: "Зілля сили", effect: "Збільшує силу", price: 50, quantity: 10 },
    { name: "Зілля невидимості", effect: "Робить невидимим", price: 200, quantity: 5 },
    { name: "Зілля швидкості", effect: "Збільшує швидкість", price: 80, quantity: 3 },
    { name: "Зілля здоров'я", effect: "Відновлює здоров'я", price: 60, quantity: 10 },
    { name: "Зілля мани", effect: "Відновлює ману", price: 40, quantity: 8 }
];

let indexToRemove = potions.findIndex(potion => potion.name === "Зілля невидимості");
if (indexToRemove !== -1) {
    potions.splice(indexToRemove, 1);
}

potions.unshift({ name: "Зілля розуму", effect: "Збільшує інтелект", price: 90, quantity: 6 });

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

let potionDescriptions = potions.map(potion => {
    return `${potion.name}: ${potion.effect} (${potion.price} золотих), в наявності: ${potion.quantity} шт.`;
});

let potionNames = potions.map(potion => potion.name).join(", ");

potions.sort((a, b) => a.price - b.price);

let hasManaPotion = potions.some(potion => potion.name === "Зілля мани");

let expensivePotions = potions.filter(potion => potion.price > 60);

let topExpensivePotions = potions.filter(potion => potion.price > 70).slice(0, 3);

console.log(potionDescriptions);
console.log("Список зіль:", potionNames);
console.log("Чи є 'Зілля мани'?", hasManaPotion);
console.log("Зілля дорожчі за 60 золотих:", expensivePotions);
console.log("Топ 3 найдорожчих зілля:", topExpensivePotions);
