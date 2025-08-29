import { IBookingRepository } from "./IBookingRepository.js";
export class InMemoryBookingRepository extends IBookingRepository{
    constructor() {
        super()
        this.bookings = []
    }
    getAllBookings() {
        return this.bookings
    }
    addBookings(booking) {
        this.bookings.push(booking)
    }
    findConflicting(roomId, startTime, endTime) {
        return this.bookings.filter(b => 
            b.roomId === roomId &&
                b.status !== 'cancelled' &&
                (
                (startTime >= b.startTime && startTime < b.endTime) ||
                (endTime >= b.endTime && endTime <= b.endTime) ||
                (startTime <= b.startTime && endTime >= b.endTime)
                )
        )
    }
}