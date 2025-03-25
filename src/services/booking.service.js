const BookingRepository = require("../repositories/booking.repository");
const ApiError = require("../utils/ApiError");

class BookingService {
    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data) {
        try {
            const booking = await this.bookingRepository.create(data);
            return booking;
        } catch (error) {
            const status = error.status || 500;
            throw new ApiError(status, error.message);
        }
    }
}

module.exports = BookingService;