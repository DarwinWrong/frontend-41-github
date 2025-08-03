export class Booking {
    constructor({ id, userId, status = 'pending', roomId, startTime, endTime }) {
        this.id = id;
        this.userId = userId;
        this.roomId = roomId;
        this.startTime = new Date(startTime);
        this.endTime = new Date(endTime);
        this.status = status;
    }
    confirmed() {
        this.status = 'confirmed';
    }
    cancel() {
        this.status = 'cancelled';
    }
}