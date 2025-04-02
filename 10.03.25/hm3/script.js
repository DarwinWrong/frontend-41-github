
function getUniqueWords(text) {
    const wordCount = countWords(text);
    return Object.keys(wordCount).filter(word => wordCount[word] === 1);
}
