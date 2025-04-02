function replaceWords(text, searchWords, replaceWords) {
    return text.replace(/\b(\w+)\b/g, (word) => {
        let index = searchWords.findIndex(sw => sw.toLowerCase() === word.toLowerCase());
        if (index !== -1) {
            return word[0] === word[0].toUpperCase() 
                ? replaceWords[index][0].toUpperCase() + replaceWords[index].slice(1) 
                : replaceWords[index];
        }
        return word;
    });
}

let text = "Cat runs. Dog runs. Cat jumps.";
let searchWords = ["cat", "dog"];
let replaceWordsArr = ["bird", "fish"];
console.log(replaceWords(text, searchWords, replaceWordsArr));
