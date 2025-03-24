const UserRepository = require("../repositories/user.repository");
const ApiError = require("../utils/ApiError");
const { generateHash } = require("../utils/utils");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async findById(userId) {
    return await userRepository.findById(userId);
  }

  async createUser(userData) {
    try {
      const password = userData.password;
      const hashedPassword = await generateHash(password);
      userData.password = hashedPassword;
      const user = await this.userRepository.create(userData);
      return user;
    } catch (error) {
      throw new ApiError(500, error.message);
    }
  }

  async update(userId, updateData) {
    return await userRepository.update(userId, updateData);
  }

  async delete(userId) {
    return await userRepository.delete(userId);
  }
}

module.exports = UserService;
