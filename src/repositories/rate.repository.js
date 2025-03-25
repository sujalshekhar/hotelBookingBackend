const BaseRepository = require("./base.repository");
const {Rate} = require("../models");

class RateRepository extends BaseRepository {
    constructor() {
        super(Rate);
    }
}

module.exports = RateRepository;