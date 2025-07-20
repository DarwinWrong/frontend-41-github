import {createTicketProxy} from './createTicketProxy.js';

describe('createTicketProxy', () => {
  const ticket = {
    title: 'Test Event',
    price: 100,
    date: '2025-08-01'
  };

  test('повертає ціну для admin', () => {
    const proxy = createTicketProxy(ticket, 'admin');
    expect(proxy.price).toBe(100);
  });

  test('приховує ціну для не admin', () => {
    const proxy = createTicketProxy(ticket, 'user');
    expect(proxy.price).toBe('Доступ обмежено');
  });

  test('приховує назву для guest', () => {
    const proxy = createTicketProxy(ticket, 'guest');
    expect(proxy.title).toBe('Приховано для гостей');
  });

  test('повертає звичайну властивість (date)', () => {
    const proxy = createTicketProxy(ticket, 'admin');
    expect(proxy.date).toBe('2025-08-01');
  });
});