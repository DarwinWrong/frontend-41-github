const alienMessages = [
  '🌌 Hello, Earthlings! Can you hear us?',
  '👾 We are friendly! We want to know about your Wi-Fi!',
  '🚀 We are flying to you for negotiations!',
  '🌍 Why do you call yourself Homo sapiens? 🤔',
  '🛸 We left a mark in your fields... Sorry! 🌾',
  '💡 Send us your best technology!',
  '🔊 Earthlings, your memes are too complicated! 😵',
  "🎶 We want to know about your music! What is 'hardbass'?",
];

const uniqueMessages = new Set();

const alienMap = new Map();

let messageIndex = 0;

function updateDOMWithAlienMessage(alienName, message) {
  const messagesDiv = document.getElementById('messages');
  const p = document.createElement('p');
  p.classList.add('alien-message');
  p.textContent = `${alienName} says: ${message}`;
  messagesDiv.appendChild(p);
}

function createAlien(name, customMessage) {
  let message;
  if (customMessage) {
    alienMessages.push(customMessage);
    message = customMessage;
  } else {
    if (messageIndex >= alienMessages.length) {
      messageIndex = 0;
    }
    message = alienMessages[messageIndex++];
  }

  alienMap.set(name, message);
  uniqueMessages.add(message);

  setTimeout(() => updateDOMWithAlienMessage(name, message), 1000);
}

function startAlienInvasion() {
  let alienCount = 0;
  const alienInterval = setInterval(() => {
    alienCount++;
    const alienName = `Alien ${alienCount}`;
    createAlien(alienName);

    if (alienCount >= 5) {
      clearInterval(alienInterval);
      console.log('Alien creation complete. Alien Map:', alienMap);
      console.log('Unique Messages Set:', uniqueMessages);
    }
  }, 3000);
}

startAlienInvasion();
