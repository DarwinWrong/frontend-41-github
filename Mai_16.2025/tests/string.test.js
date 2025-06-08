const { expect } = require('chai');
const StringClass = require('../script/string.js'); 

describe('StringClass', () => {
  let strObj;

  beforeEach(() => {
    strObj = new StringClass('aaabbccc');
  });

  describe('remove', () => {
  it('should remove character at valid index', () => {
    expect(strObj.remove(0)).to.equal('aabbccc');   
    expect(strObj.remove(3)).to.equal('aaabccc');   
    expect(strObj.remove(7)).to.equal('aaabbcc');   
  });

  it('should return original string if index is negative or out of range', () => {
    expect(strObj.remove(-1)).to.equal('aaabbccc');
    expect(strObj.remove(100)).to.equal('aaabbccc');
  });
});

  describe('insert', () => {
    it('should insert character at valid index', () => {
      expect(strObj.insert(0, 'z')).to.equal('zaaabbccc');
      expect(strObj.insert(3, 'z')).to.equal('aaazbbccc');
      expect(strObj.insert(8, 'z')).to.equal('aaabbcccz');
    });

    it('should insert character at start if index < 0', () => {
      expect(strObj.insert(-10, 'z')).to.equal('zaaabbccc');
    });

    it('should insert character at end if index > length', () => {
      expect(strObj.insert(100, 'z')).to.equal('aaabbcccz');
    });
  });

  describe('trimSign', () => {
    it('should replace consecutive repeated chars with single one', () => {
      expect(strObj.trimSign()).to.equal('abc');
      expect(new StringClass('hellooo!!!').trimSign()).to.equal('helo!');
      expect(new StringClass('').trimSign()).to.equal('');
    });
  });

  describe('toggle', () => {
    it('should toggle case of each character', () => {
      expect(new StringClass('aAbB').toggle()).to.equal('AaBb');
      expect(new StringClass('Hello123!').toggle()).to.equal('hELLO123!');
    });
  });

  describe('counter', () => {
    it('should count occurrences of given character', () => {
      expect(strObj.counter('a')).to.equal(3);
      expect(strObj.counter('b')).to.equal(2);
      expect(strObj.counter('z')).to.equal(0);
    });
  });
})