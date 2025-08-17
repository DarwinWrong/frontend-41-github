import { renderEvents } from './main.js'
import { createTicketProxy } from './ticketProxy.js'

jest.mock('./ticketProxy.js')
describe('renderEvents', () => {
  let container

  beforeEach(() => {
    document.body.innerHTML = '<div id="event-container"></div>'
    container = document.getElementById('event-container')
    createTicketProxy.mockImplementation((event) => event)
  })

  afterEach(() => {
    createTicketProxy.mockReset()
  })
  test('додає DOM-елементи для кожної події', () => {
    const events = [
      { title: 'Concert A', date: '2025-01-01', price: 100 },
      { title: 'Theatre B', date: '2025-02-01', price: 200 }
    ]

    renderEvents(events)
    const eventElements = container.querySelectorAll('.event')
    expect(eventElements.length).toBe(2)

    expect(eventElements[0].querySelector('h3').textContent).toBe('Concert A')
    expect(eventElements[0].querySelector('p').textContent).toContain('2025-01-01')
    expect(eventElements[0].querySelector('p').textContent).toContain('100')
    expect(eventElements[1].querySelector('h3').textContent).toBe('Theatre B')
    expect(eventElements[1].querySelector('p').textContent).toContain('2025-02-01')
    expect(eventElements[1].querySelector('p').textContent).toContain('200')
  })
})
