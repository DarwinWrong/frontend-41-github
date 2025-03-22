const alienMessages = new Set([
    '🌌 Привіт, земляни! Ви нас чуєте?',
    '👾 Ми дружні! Хочемо дізнатися про ваш Wi-Fi!',
    '🚀 Летимо до вас на переговори!',
    '🌍 Чому ви називаєте себе Homo sapiens? 🤔',
    '🛸 Ми залишили слід у ваших полях... Вибачте! 🌾',
    '💡 Передайте нам вашу найкращу технологію!',
    '🔊 Земляни, ваші меми занадто складні! 😵',
    "🎶 Ми хочемо дізнатися про вашу музику! Що таке 'хардбас'?",
]);

const aliens = new Map();
let alienIndex = 0;
const alienNames = ['Зорг', 'Клаату', 'Бліп', 'Норг', 'Флум'];

function createAlien(name, message) {
    if (!message) {
        const messagesArray = Array.from(alienMessages);
        message = messagesArray[alienIndex % messagesArray.length];
        alienIndex++;
    }
    
    alienMessages.add(message);
    aliens.set(name, message);
    
    setTimeout(() => {
        const messagesDiv = document.getElementById('messages');
        const p = document.createElement('p');
        p.textContent = `${name}: ${message}`;
        messagesDiv.appendChild(p);
    }, 1000);
}

function addAliens() {
    if (aliens.size < 5) {
        createAlien(alienNames[aliens.size]);
        setTimeout(addAliens, 3000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    addAliens();
});
