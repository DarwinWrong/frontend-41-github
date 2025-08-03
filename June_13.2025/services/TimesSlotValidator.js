export class TimeSlotValidator {
    constructor(bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
    isTimeAvailable(roomId, startTime, endTime) {
        const conflicts = this.bookingRepository.findConflicted(roomId, startTime, endTime);
        return conflicts.length === 0;
    }
}

export class MaxDurationValidator {
    constructor(maxHours) {
        this.MaxMs = maxHours * 60 * 60 * 1000;
    }
    isTimeAvailable(_, startTime, endTime) {
        return (endTime - startTime) <= this.MaxMs;
    }
}

export class WeekendValidator {
    isTimeAvailable(_, startTime, __) {
        const day = startTime.getDay();
        return day !== 0 && day !== 6;
    }
}

export class MaxBookingsPerDayValidator {
    constructor(bookingRepository, maxPerDay = 2) {
        this.bookingRepository = bookingRepository;
        this.maxPerDay = maxPerDay;
    }
    isTimeAvailable(_, startTime, __, userId) {
        const bookings = this.bookingRepository.getAllBookings();
        const userBookings = bookings.filter(b =>
            b.userId === userId &&
            b.status === 'confirmed' &&
            b.startTime.toDateString() === startTime.toDateString()
        );
        return userBookings.length < this.maxPerDay;
    }
}

export class HolidayValidator {
    constructor(holidays) {
        this.holidays = holidays.map(d => d.toDateString());
    }
    isTimeAvailable(_, startTime, __) {
        return !this.holidays.includes(startTime.toDateString());
    }
}

export class CompositeTimeSlotValidator {
    constructor(validators) {
        this.validators = validators;
    }
    isTimeAvailable(roomId, startTime, endTime, userId) {
        return this.validators.every(v => v.isTimeAvailable(roomId, startTime, endTime, userId));
    }
}