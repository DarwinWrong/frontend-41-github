// Масив передбачень
const predictions = [
    "🔮 На тебе чекає приємний сюрприз!",
    "🌟 Сьогодні твій день!",
    "🍀 Удача буде на твоєму боці!",
    "💡 Нова ідея принесе успіх!",
    "🚀 Час діяти – не зволікай!",
    "🎉 Радість прийде несподівано!",
    "📚 Знання відкриють перед тобою двері!",
    "💖 Кохання поруч – придивись уважніше!",
    "🌈 Все буде краще, ніж ти очікуєш!",
    "🧘‍♂️ Спокій і гармонія допоможуть у важливій справі!"
];

function getRandomPrediction() {
    return predictions[Math.floor(Math.random() * predictions.length)];
}

function showPrediction() {
    const predictionDiv = document.getElementById("prediction");
    const dateDiv = document.getElementById("date");
    const button = document.getElementById("predictButton");
    
    predictionDiv.textContent = "...Передбачення завантажується...";
    predictionDiv.style.opacity = "0.5";
    
    setTimeout(() => {
        const prediction = getRandomPrediction();
        const now = new Date();
        
        predictionDiv.textContent = prediction;
        predictionDiv.style.opacity = "1";
        predictionDiv.style.backgroundColor = getPredictionColor(prediction);
        dateDiv.textContent = `Дата: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    }, 2000);
}

function getPredictionColor(prediction) {
    if (prediction.includes("удача") || prediction.includes("радість")) return "green";
    if (prediction.includes("спокій") || prediction.includes("гармонія")) return "blue";
    return "purple";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("predictButton").addEventListener("click", showPrediction);
});
