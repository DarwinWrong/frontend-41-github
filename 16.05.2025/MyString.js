class MyString{
    constructor(str) {
        this.str = str
    }

    remove(index) {
        if (index < 0 || index >= this.str.length) return this.str
        return this.str.slice(0, index) + this.str.slice(index + 1)
    }
    
    insert(index, sign) {
        if (index < 0) index = 0
        if (index > this.str.length) index = this.str.length
        return this.str.substring(0, index) + sign + this.str.substring(index)
      }
    
    trimSign() {
        return this.str.replace(/(.)\1+/g, '$1')
    }
    
    toggle() {
        return [...this.str].map(char =>
          char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase()
        ).join('')
    }
    
    counter(sign) {
        return [...this.str].filter(c => c === sign).length;
    }
    
}
module.exports = MyString
