const BaseRepository = require("./base.repository");
const { Booking } = require("../models");

class BookingRepository extends BaseRepository {
    constructor() {
        super(Booking);
    }
}

module.exports = BookingRepository;