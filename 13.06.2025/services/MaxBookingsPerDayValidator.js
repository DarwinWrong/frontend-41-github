export class MaxBookingsPerDayValidator {
    constructor(bookingRepository, maxBookingsPerDay = 2) {
        this.bookingRepository = bookingRepository
        this.maxBookingsPerDay = maxBookingsPerDay
    }

    isTimeAvailable(_, startTime, __, userId) {
        const dayStart = new Date(startTime)
        dayStart.setHours(0, 0, 0, 0)

        const dayEnd = new Date(dayStart)
        dayEnd.setHours(23, 59, 59, 999)

        const userBookings = this.bookingRepository.getAllBookings().filter(b =>
            b.userId === userId &&
            b.status === 'confirmed' &&
            b.startTime >= dayStart &&
            b.startTime <= dayEnd
        )

        return userBookings.length < this.maxBookingsPerDay
    }
}