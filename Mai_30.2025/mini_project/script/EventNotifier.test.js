import expect from "expect.js";
import { EventNotifier } from "./EventNotify.js";

describe('EventNotifier', ()=>{
    let notifier;
    beforeEach(()=>{
        notifier = new EventNotifier();
    })
    test('add subscribers', ()=>{
        const subscriber = jest.fn()
        notifier.subscribe(subscriber)
        expect(notifier.subscribers.length).toBe(1);
    })
    test('call all subscribers', () => {
        const sub1 = jest.fn()
        const sub2 = jest.fn()
        notifier.subscribe(sub1)
        notifier.subscribe(sub2)
        const event = {title:"Concert"}
        notifier.notify(event)
        expect(sub1).toHaveBeenCalledWith(event)
        expect(sub2).toHaveBeenCalledWith(event)
    });
    test('Do not called subscriber', () => {
        expect(()=> notifier.notify({title:'Empty'})).not.toThrow()
    });
    
})