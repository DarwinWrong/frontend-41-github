class String {
    constructor(str) {
        this.str = str;
    }

    remove(index) {
        if (index < 0 || index >= this.str.length) return this.str;
        return this.str.slice(0, index) + this.str.slice(index + 1);
    }

    insert(index, sign) {
        if (index < 0) return sign + this.str;
        if (index > this.str.length) return this.str + sign;
        return this.str.slice(0, index) + sign + this.str.slice(index);
    }

    trimSign() {
        return this.str.replace(/(.)\1+/g, '$1');
    }

    toggle() {
        return this.str.split('').map(c =>
            c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
        ).join('');
    }

    counter(sign) {
        return [...this.str].filter(c => c === sign).length;
    }
}

module.exports = String;
