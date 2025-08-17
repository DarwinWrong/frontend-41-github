import { createTicketProxy } from './ticketProxy.js';

describe('createTicketProxy', () => {
  const ticket = { title: 'Rock Fest', date: '2025-09-01', price: 500 }

  test('повертає правильну ціну для ролі admin', () => {
    const proxy = createTicketProxy(ticket, 'admin')
    expect(proxy.price).toBe(500)
  })

  test('повертає "Доступ обмежено" для ролі user', () => {
    const proxy = createTicketProxy(ticket, 'user')
    expect(proxy.price).toBe('Доступ обмежено')
  })

  test('повертає інші властивості як є', () => {
    const proxy = createTicketProxy(ticket, 'user')
    expect(proxy.date).toBe('2025-09-01')
  })
})
