 const alienMessages = new Set ([
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
let messageIndex = 0;

function updateMessage(message, name) {
    const messages = document.getElementById('messages')
    const newElement = document.createElement('p')
    newElement.textContent = `${name}: ${message}`
    messages.appendChild(newElement)
}

function createAlien(name, message = null) {
    const messagesArray = Array.from(alienMessages);
    if (!message) {
        message =  messagesArray[messageIndex];
        messageIndex = (messageIndex + 1) % alienMessages.size;
    } else {
        alienMessages.add(message)
    }
    aliens.set(name, message)
    setTimeout(() => {
        updateMessage(message, name)
    }, 1000)
}

let alienCount = 0;
const alienNames = ['John', 'Tom', 'Bob', 'Ann', 'Emma']

const newInterval = setInterval(() => {
    if (alienCount < alienNames.length) {
        createAlien(alienNames[alienCount])
        alienCount++;
    } else {
        clearInterval(newInterval)
    }
}, 3000)