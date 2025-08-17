import { applySort, sortByPrice, sortByTitle, sortByDate } from './SortStrategy.js'

describe('sortEvents', () => {
  const events = [
    { title: 'Gamlet', date: '2025-10-01', price: 800 },
    { title: 'Imagine Dragon', date: '2025-01-01', price: 1200 },
    { title: 'Avatar 3', date: '2025-05-01', price: 300 }
  ]

  test('сортує події за ціною (зростання)', () => {
    const sorted = applySort(events, sortByPrice)
    const prices = sorted.map(e => e.price)
    expect(prices).toEqual([300, 800, 1200])
  })

  test('сортує події за назвою (алфавіт)', () => {
    const sorted = applySort(events, sortByTitle)
    const titles = sorted.map(e => e.title)
    expect(titles).toEqual(['Avatar 3', 'Gamlet', 'Imagine Dragon'])
  })

  test('сортує події за датою', () => {
    const sorted = applySort(events, sortByDate)
    const dates = sorted.map(e => e.date)
    expect(dates).toEqual(['2025-01-01', '2025-05-01', '2025-10-01'])
  })
})
