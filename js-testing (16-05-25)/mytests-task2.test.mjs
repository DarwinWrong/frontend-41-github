import { expect } from 'chai';
import MyDate from './script-task2.js';

describe('MyDate', function () {
  describe('showDate()', function () {
    it('should format day and month as text', function () {
      expect(new MyDate(20, 1, 1990).showDate()).to.equal('January 20, 1990');
      expect(new MyDate(21, 1, 1990).showDate()).to.equal('January 21, 1990');
    });
  });

  describe('isFuture()', function () {
    it('returns true for a date in the future, false otherwise', function () {
      expect(new MyDate(20, 5, 2056).isFuture()).to.be.true;
      expect(new MyDate(20, 6, 1990).isFuture()).to.be.false;
    });
  });

  describe('isLeapYear()', function () {
    it('correctly identifies leap years', function () {
      expect(new MyDate(20, 6, 1990).isLeapYear()).to.be.false;
      expect(new MyDate(20, 6, 2020).isLeapYear()).to.be.true;
    });
  });

  describe('nextDay()', function () {
    it('returns the US-style string for the next calendar day', function () {
      expect(new MyDate(20, 6, 2020).nextDay()).to.equal('6/21/2020');
      expect(new MyDate(31, 1, 2020).nextDay()).to.equal('2/1/2020');
      expect(new MyDate(28, 2, 2020).nextDay()).to.equal('2/29/2020');
      expect(new MyDate(28, 6, 2019).nextDay()).to.equal('6/29/2019');
      expect(new MyDate(31, 12, 2020).nextDay()).to.equal('1/1/2021');
    });
  });
});
