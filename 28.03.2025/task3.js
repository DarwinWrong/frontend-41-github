let text = "Cat runs. Dog runs. Cat jumps.";
let searchWords = ["cat", "dog"];
let replaceWords = ["bird", "fish"];

function replaceWordsInText(text, searchWords, replaceWords) {
    let words = text.split(' ');
    return words.map(word => {
        let index = searchWords.findIndex(searchWords => searchWords.toLowerCase() === word.toLowerCase())
        if (index !== -1) {
            let replacedWord = replaceWords[index];
            if (word[0] === word[0].toUpperCase()) {
                replacedWord = replacedWord.charAt(0).toUpperCase() + replacedWord.slice(1)
            }
            return replacedWord;
        }
        return word;
    }).join(' ');
}

console.log(replaceWordsInText(text, searchWords, replaceWords));