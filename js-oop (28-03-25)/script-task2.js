function replaceWordsInText(text, searchWords, replaceWords) {
  const regex = /([^\w]*)(\w+)([^\w]*)/g;

  return text.replace(regex, function (match, before, word, after) {
    const lowerCaseWord = word.toLowerCase();
    const index = searchWords.indexOf(lowerCaseWord);

    if (index !== -1 && index < replaceWords.length) {
      let replacement = replaceWords[index];

      if (word === word.toUpperCase()) {
        replacement = replacement.toUpperCase();
      } else if (word[0] === word[0].toUpperCase()) {
        replacement =
          replacement.charAt(0).toUpperCase() + replacement.slice(1);
      }

      return before + replacement + after;
    }

    return match;
  });
}

let text = 'Cat runs. Dog runs. Cat jumps.';
let searchWords = ['cat', 'dog'];
let replaceWords = ['bird', 'fish'];

console.log(replaceWordsInText(text, searchWords, replaceWords));
