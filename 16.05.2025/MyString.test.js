const MyString = require('./MyString');

describe("class MyString test", () => {
   // remove
  test('remove(0) → werty', () => {
    expect(new MyString("qwerty").remove(0)).toBe("werty")
  })
  test('remove(2) → qwrty', () => {
    expect(new MyString("qwerty").remove(2)).toBe("qwrty")
  })
  test('remove(10) → qwerty', () => {
    expect(new MyString("qwerty").remove(10)).toBe("qwerty")
  })
  test('remove(-4) → qwerty', () => {
    expect(new MyString("qwerty").remove(-4)).toBe("qwerty")
  })
    
  // insert
  test('insert(0, X) → Xwerty', () => {
    expect(new MyString("qwerty").insert(0, 'X')).toBe("Xwerty")
  })
  test('insert(2, X) → qwXrty', () => {
    expect(new MyString("qwerty").insert(2, 'X')).toBe("qwXrty")
  })
  test('insert(10, X) → qwertyX', () => {
    expect(new MyString("qwerty").insert(10, 'X')).toBe("qwertyX")
  })
  test('insert(-4, X) → Xqwerty', () => {
    expect(new MyString("qwerty").insert(-4, 'X')).toBe("Xqwerty")
  })
    
   // trimSign
  test('trimSign() → qwerty', () => {
    expect(new MyString("qwerty").trimSign()).toBe("qwerty")
    expect(new MyString("qweeeerty").trimSign()).toBe("qwerty")
    expect(new MyString("qweeertttty").trimSign()).toBe("qwerty")
    expect(new MyString("qwe....rty").trimSign()).toBe("qwe.rty")
  })
    
  // toggle
  test('toggle() lower → QWERTY', () => {
    expect(new MyString("qwerty").toggle()).toBe("QWERTY")
  })
  test('toggle() upper → qwerty', () => {
    expect(new MyString("QWERTY").toggle()).toBe("qwerty")
  })
  test('toggle() mixed → QWErty', () => {
    expect(new MyString("qweRTY").toggle()).toBe("QWErty")
  })
    
  // counter
  test("counter('e') → 1", () => {
    expect(new MyString("qwerty").counter('e')).toBe(1);
  })
  test("counter('p') → 2", () => {
    expect(new MyString("apple").counter('p')).toBe(2);
  })
  test("counter('a') → 2", () => {
    expect(new MyString("avokado").counter('a')).toBe(2);
  })
})

