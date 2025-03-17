const clues = [
    { location: 'Крабсбургер', clue: 'Можливо, штанці десь на кухні' },
    { location: 'Дім Сквідварда', clue: 'Пахне штанцями, але це Патрік' },
    { location: "Губки Боба будинок", clue: "Штанці могли залишитися в ананасі" }
]
/**
 * Returns an array of keys for each clue object.
 * @returns {string[][]} Array of key arrays.
 */
function clueKeys() {
    return clues.map(clueObj => Object.keys(clueObj));
}
/**
 * Returns an array of entries (key-value pairs) for each clue object.
 * @returns {Array<[string, string]>[]} Array of entry arrays.
 */
function clueEntries() {
    return clues.map(clueObj => Object.entries(clueObj));
}
/**
 * Returns an array of values for each clue object.
 * @returns {string[][]} Array of value arrays.
 */
function clueValues() {
    return clues.map(clueObj => Object.values(clueObj));
}
/**
 * Checks if a given clue contains the word "штанці" (pants).
 * @param {string} clue - The clue text to check.
 * @returns {boolean} True if "штанці" is found, otherwise false.
 */
function hasPants(clue) {
    return /штанці/i.test(clue);
}
/**
 * Counts occurrences of each word in all clues.
 * @returns {Object.<string, number>} An object where keys are words and values are their frequencies.
 */
function countWords() {
    const count = {};
        clues.forEach(obj => {
            obj.clue.toLowerCase().split(/\s+/).forEach(word => {
                count[word] = (count[word] || 0) + 1;
            });
        });
    return count; 
}
/**
 * Replaces the word "штанці" with "золоті штанці" in all clues.
 * @returns {Array<{location: string, clue: string}>} New array with modified clues.
 */
function replaceWord() {
    return clues.map(obj => ({
        location: obj.location,
        clue: obj.clue.replaceAll("штанці", "золоті штанці") 
    }))
}
/**
 * Filters clues that contain the word "штанці".
 * @returns {Array<{location: string, clue: string}>} Filtered array of clues.
 */
function filterClues() {
    return clues.filter(obj => hasPants(obj.clue))
}
/**
 * Returns the total number of clues.
 * @returns {number} The count of clues.
 */
function allClues() {
    return clues.reduce(count => count +1, 0)
}
/**
 * Joins all clue texts into a single string, separated by "; ".
 * @returns {string} Concatenated string of all clues.
 */
function joinClues() {
    return clues.map(obj => obj.clue).join('; ')
}

console.log(clueKeys())
console.log(clueEntries())
console.log(clueValues())
console.log(hasPants('Можливо, штанці десь на кухні'))
console.log(countWords())
console.log(replaceWord())
console.log(filterClues())
console.log(allClues())
console.log(joinClues())