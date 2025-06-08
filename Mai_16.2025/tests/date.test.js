const { expect } = require('chai');
const MyDate = require('../script/myDate.js');

describe('MyDate class', () => {
    describe('showDate()', () => {
        it('повертає правильну дату', () => {
            expect(new MyDate(20, 1, 1990).showDate()).to.equal("20 січня 1990 року");
            expect(new MyDate(5, 12, 2021).showDate()).to.equal("5 грудня 2021 року");
        });
    });

    describe('isFuture()', () => {
        it('повертає true для майбутньої дати', () => {
            const year = new Date().getFullYear() + 10;
            expect(new MyDate(1, 1, year).isFuture()).to.be.true;
        });

        it('повертає false для минулої дати', () => {
            expect(new MyDate(1, 1, 2000).isFuture()).to.be.false;
        });

        it('повертає false для поточної дати або раніше', () => {
            const now = new Date();
            const today = new MyDate(now.getDate(), now.getMonth() + 1, now.getFullYear());
            expect(today.isFuture()).to.be.false;
        });
    });

    describe('isLeapYear()', () => {
        it('визначає високосний рік', () => {
            expect(new MyDate(1, 1, 2020).isLeapYear()).to.be.true;
            expect(new MyDate(1, 1, 2000).isLeapYear()).to.be.true;
        });

        it('визначає не високосний рік', () => {
            expect(new MyDate(1, 1, 1900).isLeapYear()).to.be.false;
            expect(new MyDate(1, 1, 2023).isLeapYear()).to.be.false;
        });
    });

    describe('nextDay()', () => {
        it('повертає наступний день для середини місяця', () => {
            expect(new MyDate(10, 5, 2023).nextDay()).to.equal("11/5/2023");
        });

        it('переходить на новий місяць', () => {
            expect(new MyDate(31, 1, 2023).nextDay()).to.equal("1/2/2023");
        });

        it('переходить на новий рік', () => {
            expect(new MyDate(31, 12, 2023).nextDay()).to.equal("1/1/2024");
        });

        it('враховує високосний рік (29 лютого)', () => {
            expect(new MyDate(28, 2, 2020).nextDay()).to.equal("29/2/2020");
        });

        it('не створює помилку при кінці місяця, не високосного року', () => {
            expect(new MyDate(28, 2, 2021).nextDay()).to.equal("1/3/2021");
        });
    });
});