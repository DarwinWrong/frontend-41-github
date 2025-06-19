import { ReportService } from "../services/reportService.js";
import { InMemoryBooking } from "../repositories/memoryBooking.js";
import { RoomRepository } from "../repositories/room.js";
import { Booking } from "../models/booking.js";
import { Room } from "../models/room.js";

describe(`Report Service`, ()=>
{
    let bookingRepo, roomRepo, reportService;
    beforeEach(()=>
    {
        bookingRepo = new InMemoryBooking;
        roomRepo = new RoomRepository;
        reportService = new ReportService(bookingRepo, roomRepo);

        roomRepo.addRoom(new Room('room1', 'roomroom', 30))
    })
    test(`returns confirm booking in report`, ()=>
    {
        const booking = new Booking({
            roomId: 'room1',
            userId: 1,
            startTime: '2025-06-09T10:00:00',
            endTime: '2025-06-09T12:00:00',
            status: `confirmed`
        })
        bookingRepo.addBooking(booking)
        const report = reportService.generateReport(new Date('2025-06-09T10:00:00'), new Date('2025-06-10T10:00:00'))

        expect(report).toHaveLength(1);
        expect(report[0]).toMatchObject({bookingId:'b1', roomName: 'roomroom', userId: 1})
    })
    test(`ignore cancelled bookings`, ()=>
    {
        const booking = new Booking({
            roomId: 'room1',
            userId: 1,
            startTime: '2025-06-09T10:00:00',
            endTime: '2025-06-09T12:00:00',
            status: `cancelled`
        })
        bookingRepo.addBooking(booking)
        const report = reportService.generateReport(new Date('2025-06-09T10:00:00'), new Date('2025-06-10T10:00:00'))

        expect(report).toHaveLength(0);
    })
})