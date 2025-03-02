const { User } = require("../models");

class UserRepository {
  async findById(userId) {
    return await User.findByPk(userId);
  }

  async create(userData) {
    return await User.create(userData);
  }

  async update(userId, updateData) {
    return await User.update(updateData, { where: { id: userId } });
  }

  async delete(userId) {
    return await User.destroy({ where: { id: userId } });
  }
}

module.exports = new UserRepository();
