import { Booking } from "../models/booking.js";

export class BookingManager {
    constructor(bookingRepository, validator, logger, notifier) {
        this.repo = bookingRepository;
        this.validator = validator;
        this.logger = logger;
        this.notifier = notifier;
    }

    createBooking(data) {
        const { roomId, userId, startTime, endTime } = data;
        if (!this.validator.isTimeAvailable(roomId, new Date(startTime), new Date(endTime), userId)) {
            this.logger.error('Time slot conflicts or limit exceeded');
            throw new Error('Time slot is not available');
        }
        const booking = new Booking({
            id: Date.now().toString(),
            roomId,
            userId,
            startTime,
            endTime,
        });
        this.repo.addBooking(booking);
        this.logger.info(`Booking created ${booking.id}`);
        this.notifier.notifyUser(userId, `Ваше бронювання ${booking.id} створено`);
        return booking;
    }

    confirmBooking(bookingId) {
        const booking = this.repo.getAllBookings().find(b => b.id === bookingId);
        if (booking) {
            booking.confirmed();
            this.logger.info(`Booking confirmed ${bookingId}`);
            this.notifier.notifyUser(booking.userId, `Ваше бронювання ${bookingId} підтверджено`);
        }
    }

    cancelBooking(bookingId) {
        const booking = this.repo.getAllBookings().find(b => b.id === bookingId);
        if (booking) {
            booking.cancel();
            this.logger.info(`Booking cancelled ${bookingId}`);
            this.notifier.notifyUser(booking.userId, `Ваше бронювання ${bookingId} скасовано`);
        }
    }
}