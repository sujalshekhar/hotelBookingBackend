const BookingService = require("../services/booking.service");
const ApiResponse = require("../utils/ApiResponse");

class BookingController {
    constructor() {
        this.bookingService = new BookingService();
    }

    createBooking = async(req, res, next) => {
        try {
            const booking = await this.bookingService.createBooking(req.body);
            res.status(201).json(ApiResponse.success('Booking created successfully', booking, 201));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = BookingController;