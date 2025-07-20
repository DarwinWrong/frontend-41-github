import { applySort, sortByPrice, sortByTitle, sortByDate } from './SortStrategy.js';

describe('sortEvents', () => {
  const events = [
    { title: 'B', price: 300, date: '2025-08-03' },
    { title: 'A', price: 100, date: '2025-08-01' },
    { title: 'C', price: 200, date: '2025-08-02' }
  ];

  test('сортує за ціною (зростання)', () => {
    const sorted = applySort(events, sortByPrice);
    expect(sorted.map(e => e.price)).toEqual([100, 200, 300]);
  });

  test('сортує за назвою (алфавіт)', () => {
    const sorted = applySort(events, sortByTitle);
    expect(sorted.map(e => e.title)).toEqual(['A', 'B', 'C']);
  });

  test('сортує за датою', () => {
    const sorted = applySort(events, sortByDate);
    expect(sorted.map(e => e.date)).toEqual([
      '2025-08-01',
      '2025-08-02',
      '2025-08-03'
    ]);
  });
});