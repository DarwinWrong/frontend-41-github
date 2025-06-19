import { BookingManager } from "../services/bookingManager.js";
import { TimeSlotValidator } from "../services/timeSlotValidator.js";
import { InMemoryBooking } from "../repositories/memoryBooking.js";
import { Logger } from "../utils/logger.js";

const createTestManager = () =>
{
    const repo = new InMemoryBooking;
    const validator = new TimeSlotValidator;
    const logger = new Logger;
    return new BookingManager(repo, validator, logger);
}

describe(`Booking manager`, ()=>
{
    test(`without conflict`, ()=>
    {
        const manager = createTestManager();
        const booking = manager.createBooking({
            roomId: 'room1',
            userId: 1,
            startTime: '2025-06-09T10:00:00',
            endTime: '2025-06-09T12:00:00'
        });
        expect(booking).toHaveProperty('id');
        expect(booking.status).toBe('pending');
    })
    test(`time conflict`, ()=>
    {
        const manager = createTestManager();
        manager.createBooking({
            roomId: 'room1',
            userId: 1,
            startTime: '2025-06-09T10:00:00',
            endTime: '2025-06-09T12:00:00'
        });
        expect(()=>
        {
            manager.createBooking({
                roomId: 'room1',
                userId: 1,
                startTime: '2025-06-09T10:30:00',
                endTime: '2025-06-09T11:30:00'
            })
        }).toThrow('Time slot is not available')
    })
    test(`confirm`, ()=>
    {
        const manager = createTestManager();
        const booking = manager.createBooking({
            roomId: 'room1',
            userId: 1,
            startTime: '2025-06-09T10:00:00',
            endTime: '2025-06-09T12:00:00'
        });
        manager.confirmBooking(booking.id);
        expect(booking.status).toBe(`confirmed`);
    })
})