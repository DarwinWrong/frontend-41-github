export class HolidayValidator {
    constructor(holidays = []) {
        this.holidays = holidays.map(d => d.toDateString())
    }

    isTimeAvailable(_, startTime) {
        return !this.holidays.includes(startTime.toDateString())
    }
}