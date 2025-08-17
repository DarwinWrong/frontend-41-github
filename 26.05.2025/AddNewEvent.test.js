import { TicketFacade } from './TicketFacade.js'
import { addNewEvent } from './main.js'

describe('addNewEvent', () => {
  let events
  let notifier

  beforeEach(() => {
    events = []
    notifier = { notify: jest.fn() }
    global.events = events
    global.notifier = notifier
    jest.spyOn(TicketFacade, 'createAndLogEvent').mockImplementation(() => {
      return { type: 'concert', title: 'New event', date: '2025-07-01', price: 999 }
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('додає нову подію в масив events', () => {
    addNewEvent()
    expect(events.length).toBe(1)
    expect(events[0].title).toBe('New event')
  })

  test('викликає notifier.notify з правильною подією', () => {
    addNewEvent()
    expect(notifier.notify).toHaveBeenCalledTimes(1)
    expect(notifier.notify).toHaveBeenCalledWith(expect.objectContaining({
      title: 'New event',
      type: 'concert',
      date: '2025-07-01',
      price: 999
    }))
  })
})
