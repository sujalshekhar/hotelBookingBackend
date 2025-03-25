const RoomTypeService = require('../services/roomtype.service');
const ApiResponse = require('../utils/ApiResponse');

class RoomTypeController {
    constructor() {
        this.roomTypeService = new RoomTypeService()
    }

    createRoomType = async (req, res, next) => {
        try {
            const data = req.body;
            const roomtype = await this.roomTypeService.createRoomType(data);
            res.status(201).json(ApiResponse.success('Room type created', roomtype, 201));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = RoomTypeController;