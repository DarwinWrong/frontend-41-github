import { EventNotifier } from "./EventNotifier";

describe('EventNotifier', () => {
    let notifier;
    beforeEach(() => {
        notifier = new EventNotifier()
    })
    test('Add user', () => {
        const subscriber = jest.fn()
        notifier.subscribe(subscriber)
        expect(notifier.subscribers.length).toBe(1)
    })
    test('Call all users notify', () => {
        const sub1 = jest.fn()
        const sub2 = jest.fn()
        notifier.subscribe(sub1)
        notifier.subscribe(sub2)
        const event = { title: 'Concert' }
        notifier.notify(event)
        expect(sub1).toHaveBeenCalledWith(event)
        expect(sub2).toHaveBeenCalledWith(event)
    })
    test('Do not called id if was not subscribe', () => {
        expect(() => notifier.notify({title: 'Empty'})).not.toThrow();
    })
})