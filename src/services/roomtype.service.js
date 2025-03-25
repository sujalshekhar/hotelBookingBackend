const RoomTypeRepository = require('../repositories/roomtype.repository')
const ApiError = require('../utils/ApiError')

class RoomTypeService {
    constructor() {
        this.roomTypeRepository = new RoomTypeRepository()
    }

    async createRoomType(data) {
        try {
            const roomtype = await this.roomTypeRepository.create(data);
            return roomtype;
        } catch (error) {
            const status = error.status || 500
            throw new ApiError(status, error.message);
        }
    }
}

module.exports = RoomTypeService