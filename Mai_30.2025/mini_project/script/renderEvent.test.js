import { renderEvent } from './main.js';
import { createTicketProxy } from './TicketProxy.js';

jest.mock('./TicketProxy.js', () => ({
  createTicketProxy: jest.fn()
}));

describe('renderEvent', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = `<div id="events-container"></div>`;
    container = document.getElementById('events-container');

    createTicketProxy.mockImplementation(event => ({
      ...event,
      price: event.price,
      title: event.title
    }));
  });

  test('рендерить події в контейнер', () => {
    const events = [
      { title: 'Event 1', date: '2025-08-01', price: 100 },
      { title: 'Event 2', date: '2025-08-02', price: 200 }
    ];

    renderEvent(events);

    const renderedEvents = container.querySelectorAll('.event');
    expect(renderedEvents.length).toBe(2);
    expect(renderedEvents[0].innerHTML).toContain('Event 1');
    expect(renderedEvents[1].innerHTML).toContain('Event 2');
  });
});