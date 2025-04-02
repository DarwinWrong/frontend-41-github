const predictions = [
    "Сьогодні твій день!",
    "Будь готовий до приємного сюрпризу!",
    "Нові можливості вже поруч!",
    "Час зробити сміливий крок!",
    "Не бійся змін – вони принесуть щастя!",
    "Удача на твоєму боці!",
    "Важливе рішення принесе успіх!",
    "Зустріч із давнім другом подарує радість!",
    "Справи йдуть на краще!",
    "Прислухайся до своєї інтуїції!"
];

const predictionContainer = document.getElementById("prediction");
const button = document.getElementById("getPrediction");

button.addEventListener("click", () => {
    button.disabled = true;
    predictionContainer.innerText = "🔮 Готуємо передбачення...";
    
    setTimeout(() => {
        const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
        const date = new Date().toLocaleString();
        
        predictionContainer.innerHTML = `<strong>${randomPrediction}</strong><br><small>${date}</small>`;
        predictionContainer.style.color = getRandomColor();
        
        button.disabled = false;
    }, 2000);
});

function getRandomColor() {
    const colors = ["green", "blue", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
}