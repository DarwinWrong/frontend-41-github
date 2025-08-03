import { InMemoryBookingRepository } from "./repositories/InMemoryBookingRepository.js";
import { RoomRepository } from "./repositories/RoomRepository.js";
import { TimeSlotValidator, MaxDurationValidator, WeekendValidator, MaxBookingsPerDayValidator, HolidayValidator, CompositeTimeSlotValidator } from "./services/TimesSlotValidator.js";

import { BookingManager } from "./services/BookingManager.js";
import { Logger } from "./utils/logger.js";
import { Room } from "./models/room.js";
import { ReportServices } from "./services/ReportSetvices.js";
import { NotifyService } from "./services/NotoficationServices.js";

const bookingRepo = new InMemoryBookingRepository();
const roomRepo = new RoomRepository();
const logger = new Logger();
const notifier = new NotifyService();

const validators = new CompositeTimeSlotValidator([
    new TimeSlotValidator(bookingRepo),
    new MaxDurationValidator(4),
    new WeekendValidator(),
    new MaxBookingsPerDayValidator(bookingRepo, 2),
    new HolidayValidator([new Date('2025-01-01'), new Date('2025-08-24')])
]);

const manager = new BookingManager(bookingRepo, validators, logger, notifier);
const reportService = new ReportServices(bookingRepo, roomRepo);

const room = new Room('room1', 'Main Conference Hall', 50);
roomRepo.addRooms(room);

try {
    const booking = manager.createBooking({
        roomId: 'room1',
        userId: 'user1',
        startTime: '2025-06-09T10:00:00',
        endTime: '2025-06-09T12:00:00'
    });
    manager.confirmBooking(booking.id);
    console.log('Готове бронювання', booking);

    const report = reportService.generateReport(new Date('2025-06-09T00:00:00'), new Date('2025-06-09T23:59:59'));
    console.table(report);
} catch (e) {
    console.error('Помилка:', e.message);
}