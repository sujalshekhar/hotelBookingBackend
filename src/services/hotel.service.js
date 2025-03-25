const HotelRepository = require('../repositories/hotel.repository');

class HotelService {
    constructor() {
        this.hotelRepository = new HotelRepository();
    }

    async createHotel(data) {
        try {
            const hotel = await this.hotelRepository.create(data);
            return hotel;
        } catch (error) {
            const status = error.status || 500;
            throw new ApiError(error.message, status);
        }
    }
}

module.exports = HotelService;