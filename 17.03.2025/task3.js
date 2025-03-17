class ExtendedArray extends Array {
    getString(separator = ',') {
        return this.join(separator);
    }
    getHtml(tagName) {
        if (tagName === 'li') {
            return `<ul>\n${this.map(item => `  <li>${item}</li>`).join('\n')}\n</ul>`;
        }
        return this.map(item => `<${tagName}>${item}</${tagName}>`).join('\n');
            
    }
}

const animals = new ExtendedArray('dog', 'cat', 'rabbit');
console.log(animals.getString('-'));
console.log(animals.getHtml('li'));
console.log(animals.getHtml('div'));