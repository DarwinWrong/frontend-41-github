const MyDate = require('./MyDate')

describe('MyDate class', () => {
  test('showDate', () => {
    expect(new MyDate(20, 1, 1990).showDate()).toBe('20 січня 1990 року')
    expect(new MyDate(21, 1, 1990).showDate()).toBe('21 січня 1990 року')
  })

  test('isFuture', () => {
    expect(new MyDate(20, 5, 2056).isFuture()).toBe(true)
    expect(new MyDate(20, 6, 1990).isFuture()).toBe(false)
  })

  test('isLeapYear', () => {
    expect(new MyDate(20, 6, 1990).isLeapYear()).toBe(false)
    expect(new MyDate(20, 6, 2020).isLeapYear()).toBe(true)
  })

  test('nextDay', () => {
    expect(new MyDate(20, 6, 2020).nextDay()).toBe('21/6/2020')
    expect(new MyDate(31, 1, 2020).nextDay()).toBe('1/2/2020')
    expect(new MyDate(28, 2, 2020).nextDay()).toBe('29/2/2020')
    expect(new MyDate(28, 6, 2019).nextDay()).toBe('1/3/2020')
    expect(new MyDate(31, 12, 2020).nextDay()).toBe('1/1/2021')
  })
})
