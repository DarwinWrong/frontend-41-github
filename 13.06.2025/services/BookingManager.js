import { Booking } from "../models/Booking.js"
export class BookingManager{
    constructor(bookingRepository, validator, logger, notifier) {
        this.repo = bookingRepository
        this.validator = validator
        this.logger = logger
        this.notifier = notifier
    }
    createBooking(data) {
        const { roomId, userId, startTime, endTime } = data
        if (!this.validator.isTimeAvailable(roomId, new DataTransfer(startTime), new DataTransfer(endTime))) {
            this.logger.error('Time slot conflicts')
            throw new Error ('Time slot is available')
        }
        const booking = new Booking({
            id: Date.now().toString,
            roomId,
            userId,
            startTime,
            endTime
        })
        this.repo.addBooking(booking)
        this.logger.info('Booking created' + booking.id)
        this.notifier.notifierUser(userId, `Ваше бронювання ${booking.id} створено`)
        return booking
    }
    confirmBooking(bookingId) {
        const booking = this.repo.getAllBookings().find(b => b.id === bookingId)
        if (booking) {
            booking.confirm()
            this, this.logger.info('Booking confirmed' + bookingId)
            this.notifier.notifierUser(userId, `Ваше бронювання ${booking.id} підтверджено`)
        }
    }
    cancelBooking(bookingId) {
        const booking = this.repo.getAllBookings().find(b => b.id === bookingId)
        if (booking) {
            booking.cancel()
            this, this.logger.info('Booking cancelled' + bookingId)
            this.notifier.notifierUser(userId, `Ваше бронювання ${booking.id} скасовано`)
        }
    }
}