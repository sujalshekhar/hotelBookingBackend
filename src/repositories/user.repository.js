const { User } = require("../models");
const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email: email } });
  }
}

module.exports = UserRepository;
