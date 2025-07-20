import { TicketFacade } from './TicketFacade.js';
import { addNewEvent } from './main.js';
import { notifier } from './main.js';

jest.mock('./TicketFacade.js');
jest.mock('./main.js', () => {
  const actual = jest.requireActual('./main.js');
  return {
    ...actual,
    events: [],
    notifier: { notify: jest.fn() },
    renderEvent: jest.fn()
  };
});

describe('addNewEvent', () => {
  beforeEach(() => {
    TicketFacade.createAndLogEvent.mockReturnValue({
      title: 'Alan Walker',
      date: '2025-09-22',
      type: 'concert',
      price: 1500
    });
  });

  test('додає подію до масиву', () => {
    const { events } = require('./main.js');
    events.length = 0;

    addNewEvent();

    expect(events.length).toBe(1);
    expect(events[0].title).toBe('Alan Walker');
  });

  test('викликає notify з правильною подією', () => {
    addNewEvent();
    expect(notifier.notify).toHaveBeenCalledWith(expect.objectContaining({
      title: 'Alan Walker'
    }));
  });
});
