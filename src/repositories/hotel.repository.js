const BaseRepository = require("./base.repository");
const {Hotel} = require("../models");

class HotelRepository extends BaseRepository {
    constructor() {
        super(Hotel);
    }
}

module.exports = HotelRepository;