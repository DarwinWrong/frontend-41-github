const clues = [
  {
    location: 'Krabsburger',
    clue: 'Maybe the pants are somewhere in the kitchen.',
  },
  {
    location: "Squidward's House",
    clue: "It smells like pants, but it's Patrick.",
  },
  {
    location: 'Chum Bucket',
    clue: 'Could it be that the pants are hiding near the chum?',
  },
  {
    location: 'Bikini Bottom Market',
    clue: 'I heard someone mention lost pants at the market.',
  },
];

function viewAllClues() {
  console.log('Viewing all keys for each clue:');
  clues.forEach((clueObj, index) => {
    console.log(`Clue ${index + 1} keys:`, Object.keys(clueObj));
  });
}

function displayClues() {
  console.log('Displaying clues (key-value pairs):');
  clues.forEach((clueObj, index) => {
    console.log(`Clue ${index + 1} entries:`, Object.entries(clueObj));
  });
}

function getClueTexts() {
  const texts = clues.map((clueObj) => Object.values(clueObj)[1]);
  console.log('Clue texts:', texts);
  return texts;
}

function containsPants(text) {
  return text.toLowerCase().includes('pants');
}

function countWordRepetitions(texts) {
  const wordCounts = {};
  texts.forEach((text) => {
    const words = text
      .replace(/[.,!?]/g, '')
      .toLowerCase()
      .split(/\s+/);
    words.forEach((word) => {
      if (word) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      }
    });
  });
  console.log('Word repetitions:', wordCounts);
  return wordCounts;
}

function replacePants(text) {
  const replacedText = text.replace(/pants/gi, 'golden pants');
  console.log('Original text:', text);
  console.log('Replaced text:', replacedText);
  return replacedText;
}

function filterCluesByPants() {
  const filtered = clues.filter((clueObj) => containsPants(clueObj.clue));
  console.log("Clues mentioning 'pants':", filtered);
  return filtered;
}

function countAllClues() {
  const total = clues.reduce((acc) => acc + 1, 0);
  console.log('Total number of clues:', total);
  return total;
}

function combineAllClues() {
  const combined = clues.map((clueObj) => clueObj.clue).join(' ');
  console.log('Combined clue history:', combined);
  return combined;
}

console.log('=== SpongeBob Lost His Pants: Clues Analysis ===');
viewAllClues();
displayClues();
getClueTexts();

const texts = clues.map((clueObj) => clueObj.clue);
countWordRepetitions(texts);

clues.forEach((clueObj) => replacePants(clueObj.clue));

filterCluesByPants();
countAllClues();
combineAllClues();
