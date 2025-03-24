const alienMessages = [
  "🌌 Привіт, земляни! Ви нас чуєте?",
  "👾 Ми дружні! Хочемо дізнатися про ваш Wi-Fi!",
  "🚀 Летимо до вас на переговори!",
  "🌍 Чому ви називаєте себе Homo sapiens? 🤔",
  "🛸 Ми залишили слід у ваших полях... Вибачте! 🌾",
  "💡 Передайте нам вашу найкращу технологію!",
  "🔊 Земляни, ваші меми занадто складні! 😵",
  "🎶 Ми хочемо дізнатися про вашу музику! Що таке 'хардбас'?",
];
const uniqeMessages = new Set();
const aliens = new Map();
let messageInd = 0;

function createAlien(name, alienMessage) {
  let message;
  if (alienMessage !== undefined) {
    alienMessages.push(alienMessage);
    message = alienMessage;
  } else {
    messageInd = (messageInd + 1) % alienMessages.length;
    message = alienMessages[messageInd];
  }
  aliens.set(name, message);
  setTimeout(() => {
    uniqeMessages.add(message);
    const messageDiv = document.getElementById("messages");
    const messageP = document.createElement("p");
    messageP.textContent = message;
    messageDiv.appendChild(messageP);
  }, 1000);
}

let alienCount = 0;
const intervalId = setInterval(() => {
  const alienName = `Alien${alienCount + 1}`;
  createAlien(alienName);
  alienCount++;
  if (alienCount >= 5) {
    clearInterval(intervalId);
  }
}, 3000);
