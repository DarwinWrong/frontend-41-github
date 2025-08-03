import { IBookingRepository } from "./IBookingRepositories.js";

export class InMemoryBookingRepository extends IBookingRepository {
    constructor() {
        super();
        this.bookings = [];
    }

    getAllBookings() {
        return this.bookings;
    }
    addBooking(booking) {
        this.bookings.push(booking);
    }
    findConflicted(roomId, startTime, endTime) {
        return this.bookings.filter(b =>
            b.roomId === roomId &&
            b.status !== 'cancelled' &&
            (
                (startTime >= b.startTime && startTime < b.endTime) ||
                (endTime > b.startTime && endTime <= b.endTime) ||
                (startTime <= b.startTime && endTime >= b.endTime)
            )
        );
    }
}