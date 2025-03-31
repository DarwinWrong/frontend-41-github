const clues = [
    { location: "Крабсбургер", clue: "Можливо штанці десь на кухні" },
    { location: "Дім Сквідварда", clue: "Пахне штанцями, але це Патрік" },
    { location: "Будинок Патріка", clue: "Тут немає штанців, тільки сміття" },
    { location: "Медузій луг", clue: "Штанці могли залишитися тут після гри" }
];

function getAllClueLocations() {
    return clues.map(obj => obj.location);
}

function getCluesEntries() {
    return clues.map(obj => Object.entries(obj));
}

function getCluesText() {
    return clues.map(obj => obj.clue);
}

function hasPants(clue) {
    return clue.toLowerCase().includes("штанці");
}

function filterPantsClues() {
    return clues.filter(obj => hasPants(obj.clue));
}

function countClues() {
    return clues.length;
}

function createSearchStory() {
    return clues.map(obj => obj.clue).join(". ");
}

document.getElementById("findPantsBtn").addEventListener("click", function () {
    document.getElementById("result").textContent = createSearchStory();
});

console.log("📍 Локації підказок:", getAllClueLocations());
console.log("🔎 Підказки:", getCluesEntries());
console.log("📝 Тексти підказок:", getCluesText());
console.log("🎯 Підказки, де є штанці:", filterPantsClues());
console.log("🔢 Кількість підказок:", countClues());
console.log("📖 Історія пошуку штанців:", createSearchStory());
