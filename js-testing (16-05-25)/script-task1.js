class MyString extends String {
  constructor(str) {
    super(str);
  }

  remove(index) {
    const s = this.toString();
    if (index < 0 || index >= s.length) {
      return s;
    }
    return s.slice(0, index) + s.slice(index + 1);
  }

  insert(index, sign) {
    const s = this.toString();
    if (index < 0) {
      return sign + s;
    }
    if (index >= s.length) {
      return s + sign;
    }
    return s.slice(0, index) + sign + s.slice(index + 1);
  }

  trimSign() {
    return this.toString().replace(/(.)\1+/g, '$1');
  }

  toggle() {
    let result = '';
    for (const ch of this.toString()) {
      result += ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase();
    }
    return result;
  }

  counter(sign) {
    let count = 0;
    for (const ch of this.toString()) {
      if (ch === sign) count++;
    }
    return count;
  }
}

module.exports = MyString;
