const alienMessages = new Set([
    '🌌 Привіт, земляни! Ви нас чуєте?',
    '👾 Ми дружні! Хочемо дізнатися про ваш Wi-Fi!',
    '🚀 Летимо до вас на переговори!',
    '🌍 Чому ви називаєте себе Homo sapiens? 🤔',
    '🛸 Ми залишили слід у ваших полях... Вибачте! 🌾',
    '💡 Передайте нам вашу найкращу технологію!',
    '🔊 Земляни, ваші меми занадто складні! 😵',
    "🎶 Ми хочемо дізнатися про вашу музику! Що таке 'хардбас'?"
]);

const aliens = new Map();
let alienCounter = 0;
const messageDiv = document.getElementById("messages");

function createAlien(name, message = null) {
    if (!message) {
        const messagesArray = Array.from(alienMessages);
        message = messagesArray[alienCounter % messagesArray.length];
    }
    alienMessages.add(message);
    aliens.set(name, message);

    setTimeout(() => {
        const messageElement = document.createElement("p");
        messageElement.textContent = `👽 ${name}: ${message}`;
        messageDiv.appendChild(messageElement);
    }, 1000);

    alienCounter++;
}

const alienNames = ["Зорг", "Клаксон", "Бліп-Блоп", "Гларг", "Флюм"];
let addedAliens = 0;

const interval = setInterval(() => {
    if (addedAliens < alienNames.length) {
        createAlien(alienNames[addedAliens]);
        addedAliens++;
    } else {
        clearInterval(interval);
    }
}, 3000);
