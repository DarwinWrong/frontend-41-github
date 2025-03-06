let potions = [
    { name: "Зілля сили", effect: "Сила", price: "50", quantity: "3"},
    { name: "Зілля невидимості", effect: "Невидимість", price: "120", quantity: "9"},
    { name: "Зілля швидкості", effect: "Швидкість", price: "75", quantity: "4"},
    { name: "Зілля здоров'я", effect: "Здоровʼя", price: "130", quantity: "2"},
    { name: "Зілля мани", effect: "Мана", price: "80", quantity: "7"}
];
// 2 task
potions.splice(1,1)
console.log(potions)

//3 task
potions.unshift({
    name: "Зілля розуму",
    effect: "Інтелект",
    price: "90",
    quantity: "9"
})
console.log(potions)

//4 task
let extraPotions = [
    { name: "Зілля удачі", effect: "Приносить удачу", price: 120, quantity: 6 },
    { name: "Зілля відваги", effect: "Додає хоробрість", price: 75, quantity: 7 }
];
let mergePotions = potions.concat(extraPotions)
console.log(mergePotions)

//5 task
potions.forEach(potion => {
    if (potion.name === "Зілля здоров'я") {
        potion.quantity -= 2;
    }
});
console.log(potions)

//6 task
let textPotions = potions.map(function (potion) {
    return `${potion.name}: ${potion.effect} (${potion.price} золотих), в наявності: ${potion.quantity} шт.`

})
console.log(textPotions)

//7 task
let potionsList = potions.map(potion => potion.name).join(", ")
console.log(potionsList)

//8 task
potions.sort(function (a, b) {
    return a.price - b.price
})
console.log(potions)

//9 task
let findPotion = potions.find(function (potion) {
    if (potion.name === "Зілля мани") {
        console.log("Це зілля є")
    }
})

//10 task
let filterPotions = potions.filter(function (potion) {
    return potion.price > 60
})
console.log(filterPotions)

//11 task
let newFilterPotions = potions.filter(function (potion) {
    return potion.price > 70
})
let topPotions = newFilterPotions.slice(0, 3)
console.log(topPotions)
