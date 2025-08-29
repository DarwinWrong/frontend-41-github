import { InMemoryBookingRepository } from "../repositories/InMemoryBookingRepository"
export class TimeSlotValidator{
    constructor(bookingRepository) {
        this.bookingRepository = bookingRepository
    }
    isTimeAvailable(roomId, startTime, endTime) {
        const conflicts = this.bookingRepository.findConflicting(roomId, startTime, endTime)
        return conflicts.length === 0
    }

}

export class MaxDurationValidator{
    constructor(maxHours) {
        this.maxMs = maxHours *60*60*1000
    }
    isTimeAvailable(_, startTime, endTime) {
        return (endTime = startTime) <= this.maxMs
    }
}

export class WeekendValidator{
    isTimeAvailable(_, startTime, _) {
        const day = startTime.getDay();
        return day !== 0 && day !== 6
    }
}