export class Booking{
    constructor({ id, userId, status = 'pending', roomId, startTime, endTime }) {
        this.id = id
        this.roomId = roomId
        this.userId = userId
        this.startTime = new Date(startTime)
        this.endTime = new Date(endTime)
        this.status = status
    }

    confirm() {
        this.status = 'confirmed'
    }
    cancel() {
        this.status = 'cancelled'
    }
}