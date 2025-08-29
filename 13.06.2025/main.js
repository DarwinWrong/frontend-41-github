import { InMemoryBookingRepository } from "./repositories/InMemoryBookingRepository.js";
import { RoomRepository } from "./repositories/RoomRepository.js";
import { TimeSlotValidator } from "./services/TimeSlotValidator.js";
import { BookingManager } from "./services/BookingManager.js";
import { Logger } from "./utils/Logger.js";
import { Room } from "./models/Room.js";
import { ReportServices } from "./services/ReportServices.js";
import { NotificationService } from "./services/NotificationService.js";
import { MaxBookingsPerDayValidator } from "./services/MaxBookingsPerDayValidator.js";
import { CompositeTimeSlotValidator } from "./services/CompositeTimeSlotValidator.js";
import { HolidayValidator } from "./services/HolidayValidator.js";

const bookingRepo = new InMemoryBookingRepository();
const roomRepo = new RoomRepository();
const logger = new Logger();
const notifier = new NotificationService();

const compositeValidator = new CompositeTimeSlotValidator([
    new TimeSlotValidator(bookingRepo),
    new MaxBookingsPerDayValidator(bookingRepo, 2),
    new HolidayValidator([new Date('2025-01-01'), new Date('2025-08-24')])
]);

const manager = new BookingManager(bookingRepo, compositeValidator, logger, notifier);
const reportServices = new ReportServices(bookingRepo, roomRepo);

const room = new Room('room 1', 'Main conference Hall', 50);
roomRepo.addRoom(room);

try {
    const booking = manager.createBooking({
        roomId: 'room 1',
        userId: 'user 1',
        startTime: '2025-06-09T10:00:00',
        endTime: '2025-06-09T12:00:00'
    });
    manager.confirmBooking(booking.id);
    console.log(`Готове бронювання:`, booking);
    
    const report = reportServices.generateReport(
        new Date('2025-06-09T00:00:00'),
        new Date('2025-06-10T00:00:00')
    );
    console.table(report);
} catch (e) {
    console.error(`Помилка:`, e.message);
}

