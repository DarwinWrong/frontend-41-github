const predictions = [
    "Сьогодні твій день!",
    "Удача на твоєму боці!",
    "Будь уважним до знаків долі.",
    "Гарні новини вже в дорозі!",
    "Твої мрії скоро здійсняться.",
    "Очікуй несподівані сюрпризи!",
    "Зроби крок назустріч змінам!",
    "Ти отримаєш важливий досвід.",
    "Всесвіт готує для тебе подарунок!",
    "Скоро ти зустрінеш важливу людину."
];

const predictionBox = document.getElementById("prediction");
const button = document.getElementById("getPrediction");

button.addEventListener("click", () => {
    button.disabled = true;
    predictionBox.textContent = "🔮 Готуємо передбачення...";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        const prediction = predictions[randomIndex];
        const currentDate = new Date().toLocaleString();

        predictionBox.textContent = `${prediction} \n (${currentDate})`;
        predictionBox.style.color = getRandomColor();
        button.disabled = false;
    }, 2000);
});

function getRandomColor() {
    const colors = ["green", "blue", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function countWords(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const wordCount = new Map();
    words.forEach(word => {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    });
    return wordCount;
}

function getUniqueWords(text) {
    const wordCount = countWords(text);
    return Array.from(wordCount.entries()).filter(([_, count]) => count === 1).map(([word]) => word);
}

const sampleText = "Це тестовий текст. Це лише тест.";
console.log("Підрахунок слів:", countWords(sampleText));
console.log("Унікальні слова:", getUniqueWords(sampleText));