const UserRepository = require("../repositories/user.repository");
const ApiError = require("../utils/ApiError");
const { generateHash, compareHash, generateToken } = require("../utils/utils");

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
      const status = error.status || 500;
      console.log(error);
      throw new ApiError(status, error.message);
    }
  }

  async loginUser(email, password) {
    try {
      const user = await this.userRepository.findByEmail(email);
      if(!user) {
        throw new ApiError(404, "No user found with this email");
      }

      const isPasswordValid = await compareHash(password, user.password);
      if(!isPasswordValid) {
        throw new ApiError(401, "Invalid password");
      }

      const token = await generateToken(user.user_id);
      return token;

    } catch (error) {
      const status = error.status || 500;
      throw new ApiError(status, error.message);
    }
  }

  async getUser(userId) {
    try {
      const user = await this.userRepository.findById(userId);
      if(!user) {
        throw new ApiError(404, "No user found");
      }
      return user;
    } catch (error) {
      const status = error.status || 500;
      throw new ApiError(status, error.message);
    }
  }
}

module.exports = UserService;
