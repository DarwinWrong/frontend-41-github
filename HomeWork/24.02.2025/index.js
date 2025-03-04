//! 1
const potions = [
  {
    name: "Зілля сили",
    effect: "Надає користувачу неймовірну силу",
    price: 100,
    quantity: 10,
  },
  {
    name: "Зілля невидимосі",
    effect: "Надає користувачу невидимість",
    price: 55,
    quantity: 5,
  },
  {
    name: "Зілля швидкості",
    effect: "Надає користувачу швидкість блискавки",
    price: 65,
    quantity: 3,
  },
  {
    name: "Зілля здоров'я",
    effect: "Зцілює користувача",
    price: 50,
    quantity: 15,
  },
  {
    name: "Зілля мани",
    effect: "Поновлює запас мани користувача",
    price: 50,
    quantity: 13,
  },
];
//!2
const removePotion = potions.splice(1, 1);
//!3
const newPotion = {
  name: "Зілля розуму",
  effect: "Збільшує інтелект користувача",
  price: 90,
  quantity: 5,
};
//!4
let extraPotions = [
  {
    name: "Зілля удачі",
    effect: "Приносить удачу",
    price: 120,
    quantity: 6,
  },
  {
    name: "Зілля відваги",
    effect: "Додає хоробрість користувачу",
    price: 75,
    quantity: 7,
  },
];
const allPotions = potions.concat(extraPotions);
//!5
potions.forEach((potion) => {
  if (potion.name === "Зілля здоров'я") {
    potion.quantity -= 2;
    console.log(potion.quantity);
  }
});
//!6
let potionsString = [];
allPotions.map((potion) => {
  potion = `${potion.name}: ${potion.effect}(${potion.price} золотих), в наявності: ${potion.quantity} шт.`;
  potionsString.push(potion);
});
//!7
let potionName = "";
let potioName = [];
allPotions.map((potion) => {
  potioName.push(potion.name);
  potionName = potioName.join(";");
});
console.log(potionName);
//!8
allPotions.sort((a, b) => a.price - b.price);
//!9
allPotions.find((potion) => {
  if (potion.name === "Зілля мани") {
    console.log("Зілля є на складі");
  }
});
//!10
let somePotions = allPotions.filter((potion) => potion.price > 60);
//!11
let theExpennsives = allPotions
  .filter((potion) => potion.price > 70)
  .slice(0, 3);
