const BaseRepository = require("./base.repository");
const { Admin } = require("../models");

class AdminRepository extends BaseRepository {
    constructor() {
        super(Admin);
    }

    async findByEmail(email) {
        return await Admin.findOne({ where: { email: email } });
    }
}

module.exports = AdminRepository;