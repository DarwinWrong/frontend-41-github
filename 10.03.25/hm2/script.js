function countWords(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const wordCount = {};
    
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    return wordCount;
}