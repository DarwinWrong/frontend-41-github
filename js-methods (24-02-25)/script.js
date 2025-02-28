let potions = [
    { name: "Potion of Strength", effect: "Increases strength", price: 50, quantity: 10 },
    { name: "Potion of Invisibility", effect: "Makes invisible", price: 80, quantity: 5 },
    { name: "Potion of Speed", effect: "Increases speed", price: 60, quantity: 8 },
    { name: "Potion of Health", effect: "Restores health", price: 60, quantity: 10 },
    { name: "Potion of Mana", effect: "Restores mana", price: 40, quantity: 12 }
];

console.log("Initial potions array:");
console.log(potions);

const invisibilityIndex = potions.findIndex(potion => potion.name === "Potion of Invisibility");
if (invisibilityIndex !== -1) {
    potions.splice(invisibilityIndex, 1);
}
console.log("After removing Invisibility Potion:");
console.log(potions);

potions.unshift({
    name: "Potion of Mind",
    effect: "Increases intelligence",
    price: 90,
    quantity: 5
});
console.log("After adding Mind Potion:");
console.log(potions);

let extraPotions = [
    { name: "Potion of Luck", effect: "Brings Luck", price: 120, quantity: 6 },
    { name: "Potion of Courage", effect: "Adds Courage", price: 75, quantity: 7 }
];
potions = potions.concat(extraPotions);
console.log("After combining with extra potions:");
console.log(potions);

potions.forEach(potion => {
    if (potion.name === "Potion of Health") {
        potion.quantity -= 2;
    }
});
console.log("After selling 2 Health Potions:");
console.log(potions);

const potionDescriptions = potions.map(potion =>
    `${potion.name}: ${potion.effect} (${potion.price} gold), available: ${potion.quantity} pcs.`
);
console.log("Potion descriptions:");
console.log(potionDescriptions);

const potionNamesList = potions.map(potion => potion.name).join(", ");
console.log("List of all potions:");
console.log(potionNamesList);

potions.sort((a, b) => a.price - b.price);
console.log("Potions sorted by price (ascending):");
console.log(potions);

const manaPotion = potions.find(potion => potion.name === "Potion of Mana");
console.log("Found Mana Potion?", manaPotion !== undefined);

const expensivePotions = potions.filter(potion => potion.price > 60);
console.log("Potions that cost more than 60 gold:");
console.log(expensivePotions);

potions.sort((a, b) => b.price - a.price);
const bestPotions = potions.filter(potion => potion.price > 70).slice(0, 3);
console.log("\nTop 3 most expensive potions with price > 70 gold:");
console.log(bestPotions);