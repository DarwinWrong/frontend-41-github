function getWords(text) {
  const cleanedText = text.toLowerCase().replace(/[^\w\s]/g, '');
  return cleanedText.split(/\s+/).filter((word) => word !== '');
}

function countWords(words) {
  const wordCounts = {};
  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });
  return wordCounts;
}

function getUniqueWords(wordCounts) {
  return Object.keys(wordCounts).filter((word) => wordCounts[word] === 1);
}

const textInput = document.getElementById('textInput');
const processTextButton = document.getElementById('processText');
const wordCountResultDiv = document.getElementById('wordCountResult');
const uniqueWordsResultDiv = document.getElementById('uniqueWordsResult');

function processText() {
  const text = textInput.value;
  const words = getWords(text);
  const wordCounts = countWords(words);
  const uniqueWords = getUniqueWords(wordCounts);

  let wordCountOutput = 'Word Counts:\n';
  for (const [word, count] of Object.entries(wordCounts)) {
    wordCountOutput += `${word}: ${count}\n`;
  }

  let uniqueWordsOutput = 'Unique Words:\n';
  if (uniqueWords.length > 0) {
    uniqueWordsOutput += uniqueWords.join(', ');
  } else {
    uniqueWordsOutput += 'None';
  }

  wordCountResultDiv.textContent = wordCountOutput;
  uniqueWordsResultDiv.textContent = uniqueWordsOutput;
}

processTextButton.addEventListener('click', processText);
