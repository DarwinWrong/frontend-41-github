const purchaseAmount = parseFloat(prompt("Enter your purchase amount:"));
let discount = 0;

if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 3;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 5;
} else if (purchaseAmount >= 500) {
    discount = 7;
}

const finalAmount = purchaseAmount - (purchaseAmount * discount) / 100;
console.log(
    `Your purchase amount is ${purchaseAmount}. Discount: ${discount}%. Amount to pay: ${finalAmount}.`
);

let score = 0;

const question1 = prompt(
    "Question 1: What is the capital of France?\n1) Berlin\n2) Paris\n3) Rome"
);
if (question1 === "2") score += 2;

const question2 = prompt(
    "Question 2: What is 5 + 5?\n1) 10\n2) 15\n3) 20"
);
if (question2 === "1") score += 2;

const question3 = prompt(
    "Question 3: Which planet is known as the Red Planet?\n1) Earth\n2) Mars\n3) Jupiter"
);
if (question3 === "2") score += 2;

console.log(`You scored ${score} points.`);

let hungerLevel = 10;
let wallet = 100;
let pizzaAvailable = null;
let mood = "😐";

if (hungerLevel !== 0) {
    console.log("🍕 I really want pizza! Starving is not about me!");
} else {
    console.log("👌 I'm full and ready to code!");
}

let availablePizza = pizzaAvailable ?? "Unfortunately, no pizza today... 😢";
console.log(`🔍 Pizza search result: ${availablePizza}`);

let buyPizza = wallet >= 50 && hungerLevel > 5;
if (buyPizza) {
    console.log("💸 The expense is justified, the pizza is worth it!");
    wallet -= 50;
    hungerLevel -= 7;
    mood = "😋";
} else {
    console.log("🤑 No-no, it's better to save the money!");
}

let snackPrice = wallet >= 50 ? "Snack is not needed, pizza was bought." : wallet < 50 ? "I took a cheap snack." : "Snack is not affordable...";
console.log(`🥪 Pizza alternative: ${snackPrice}`);

let energyLevel = 8;
energyLevel -= 5;
console.log(`🚶‍♂️ Energy after searching: ${energyLevel}`);
if (energyLevel > 3) {
    console.log("💪 I'm going for a walk! I have enough energy!");
    energyLevel += 3;
} else {
    console.log("😴 I'm lying at home, I have no strength...");
}

let daySummary = mood === "😋" ? "The day was great because I got pizza!" : "The day was ordinary.";
let finalMood = daySummary ?? "In general, everything was sad...";
console.log(`📅 Summary of the day: ${finalMood}`);

if (pizzaAvailable) {
    hungerLevel *= 0.5;
    console.log(`🍕 Hunger is now at: ${hungerLevel}`);
} else {
    console.log("❌ Still haven't found the pizza...");
}

console.log(`🌙 Going to bed. My wallet: ${wallet}, mood: ${mood}`);
