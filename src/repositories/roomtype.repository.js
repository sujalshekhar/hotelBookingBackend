const BaseRepository = require("./base.repository");
const { RoomType } = require("../models");

class RoomTypeRepository extends BaseRepository {
    constructor() {
        super(RoomType);
    }
}

module.exports = RoomTypeRepository;