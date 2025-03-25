const HotelService = require('../services/hotel.service')
const ApiResponse = require('../utils/ApiResponse')

class HotelController {
    constructor() {
        this.hotelService = new HotelService()
    }

    createHotel = async(req, res, next) => {
        try {
            const data = req.body;
            const hotel = await this.hotelService.createHotel(data);
            res.status(201).json(ApiResponse.success('Hotel created', hotel, 201));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = HotelController;