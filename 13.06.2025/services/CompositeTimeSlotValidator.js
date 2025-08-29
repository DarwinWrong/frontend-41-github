export class CompositeTimeSlotValidator {
    constructor(validators = []) {
        this.validators = validators
    }

    isTimeAvailable(roomId, startTime, endTime, userId) {
        return this.validators.every(v =>
            v.isTimeAvailable(roomId, startTime, endTime, userId)
        )
    }
}
