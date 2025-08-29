export class RoomRepository{
    constructor() {
        this.rooms = []
    }
    addRoom(room) {
        this.rooms.push(room)
    }
    getRoomById(id) {
        return this.rooms.find(r => r.id === id)
    }
    getAllRooms() {
        return this.rooms
    }
}