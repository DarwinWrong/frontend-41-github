const predictions = [
  { text: 'Your future is bright.', category: 'positive' },
  { text: 'An unexpected event will soon occur.', category: 'mysterious' },
  { text: 'Things may get better in due time.', category: 'neutral' },
  { text: 'You will meet someone special.', category: 'positive' },
  {
    text: 'Challenges ahead, but you will overcome them.',
    category: 'neutral',
  },
  { text: 'Beware of unexpected obstacles.', category: 'mysterious' },
  { text: 'A surprise awaits you.', category: 'positive' },
  { text: 'Happiness is coming your way.', category: 'positive' },
  { text: 'Expect a twist in your plans.', category: 'mysterious' },
  { text: 'Opportunities will knock at your door.', category: 'positive' },
  { text: 'Patience is the key to success.', category: 'neutral' },
  { text: 'The stars are aligned in your favor.', category: 'positive' },
  { text: 'Take a chance and embrace change.', category: 'positive' },
  { text: 'Mystery is in the air.', category: 'mysterious' },
  { text: 'Good news will find you.', category: 'positive' },
];

const categoryColors = {
  positive: 'green',
  neutral: 'blue',
  mysterious: 'purple',
};

const predictionContainer = document.getElementById('prediction-container');
const getPredictionButton = document.getElementById('getPrediction');

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function displayRandomPrediction() {
  predictionContainer.style.opacity = '0';

  setTimeout(() => {
    const randomPrediction = predictions[getRandomIndex(predictions.length)];
    const currentDate = new Date().toLocaleString();

    const displayText = `<p>${randomPrediction.text}</p><p><small>${currentDate}</small></p>`;
    predictionContainer.innerHTML = displayText;

    predictionContainer.style.color =
      categoryColors[randomPrediction.category] || 'black';

    predictionContainer.style.opacity = '1';
  }, 2000);
}

getPredictionButton.addEventListener('click', displayRandomPrediction);
