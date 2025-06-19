import { TimeSlotValidator } from "../services/timeSlotValidator.js";
import { InMemoryBooking } from "../repositories/memoryBooking.js";
import { Booking } from "../models/booking.js";

describe(`TimeSlotValidator tests`, ()=>
{
    test(`returns true if no conflicts`, ()=>
    {
        const repo = new InMemoryBooking;
        const validator = new TimeSlotValidator(repo);
        const result = validator.isTimeAvailable('room1', new Date('2025-06-06T10:00:00'), new Date('2025-06-06T12:00:00'))
        expect(result).toBe(true);
    })
    test(`returns false if conflicts`, ()=>
        {
            const repo = new InMemoryBooking;
            const validator = new TimeSlotValidator(repo);

            const existing = new Booking({id:1, roomId:'room1', userId:1, startTime:'2025-06-06T10:00:00', endTime:'2025-06-06T11:00:00', status:'confirmed'})
            repo.addBooking(existing)
            const result = validator.isTimeAvailable('room1', new Date('2025-06-06T10:30:00'), new Date('2025-06-06T11:30:00'))
            expect(result).toBe(false);
        })
})