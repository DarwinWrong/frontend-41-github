const clues = [
    { location: "Крабсбургер", clue: "Можливо штанці десь на кухні" },
    { location: "Дім Сквідварда", clue: "Пахне штанцями, але це Патрік" },
    { location: "Медузине поле", clue: "Тут лише медузи, але якісь сліди є..." },
    { location: "Будинок Спанч Боба", clue: "Штанці точно були тут, але де вони зараз?" }
];

function getClueKeys() {
    return clues.map(clue => Object.keys(clue));
}

function getClueEntries() {
    return clues.map(clue => Object.entries(clue));
}

function getClueValues() {
    return clues.map(clue => Object.values(clue)[1]);
}

function containsPants(clueText) {
    return clueText.toLowerCase().includes("штанці");
}

function countWordOccurrences() {
    const words = clues.flatMap(clue => clue.clue.toLowerCase().split(/\s+/));
    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}

function replacePants() {
    return clues.map(clue => ({ ...clue, clue: clue.clue.replace(/штанці/gi, "золоті штанці") }));
}

function filterCluesWithPants() {
    return clues.filter(clue => containsPants(clue.clue));
}

function countCluesWithPants() {
    return clues.reduce((count, clue) => count + (containsPants(clue.clue) ? 1 : 0), 0);
}

function joinClues() {
    return clues.map(clue => clue.clue).join(" ");
}

console.log(getClueKeys());
console.log(getClueEntries());
console.log(getClueValues());
console.log(filterCluesWithPants());
console.log(countCluesWithPants());
console.log(replacePants());
console.log(countWordOccurrences());
console.log(joinClues());
