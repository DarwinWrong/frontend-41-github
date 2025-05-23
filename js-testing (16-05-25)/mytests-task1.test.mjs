import { expect } from 'chai';
import MyString from './script-task1.js';

describe('MyString', function () {
  it('remove method removes the character at the given index or returns the original string', function () {
    expect(new MyString('qwerty').remove(0)).to.equal('werty');
    expect(new MyString('qwerty').remove(2)).to.equal('qwrty');
    expect(new MyString('qwerty').remove(10)).to.equal('qwerty');
    expect(new MyString('qwerty').remove(-4)).to.equal('qwerty');
  });

  it('insert method inserts a character at the given index or at the start/end', function () {
    expect(new MyString('qwerty').insert(0, 'X')).to.equal('Xwerty');
    expect(new MyString('qwerty').insert(2, 'X')).to.equal('qwXrty');
    expect(new MyString('qwerty').insert(10, 'X')).to.equal('qwertyX');
    expect(new MyString('qwerty').insert(-4, 'X')).to.equal('Xqwerty');
  });

  it('trimSign method removes consecutive duplicate characters, leaving only one', function () {
    expect(new MyString('qwerty').trimSign()).to.equal('qwerty');
    expect(new MyString('qweeeerty').trimSign()).to.equal('qwerty');
    expect(new MyString('qweeertttty').trimSign()).to.equal('qwerty');
    expect(new MyString('qwe....rty').trimSign()).to.equal('qwe.rty');
  });

  it('toggle method switches each letter’s case', function () {
    expect(new MyString('qwerty').toggle()).to.equal('QWERTY');
    expect(new MyString('QWERTY').toggle()).to.equal('qwerty');
    expect(new MyString('qweRTY').toggle()).to.equal('QWErty');
  });

  it('counter method counts how many times the given character appears in the string', function () {
    expect(new MyString('qwerty').counter('e')).to.equal(1);
    expect(new MyString('apple').counter('p')).to.equal(2);
    expect(new MyString('avokado').counter('a')).to.equal(2);
  });
});
