const AdminRepository = require("../repositories/admin.repository");
const ApiError = require("../utils/ApiError");
const { generateHash, compareHash, generateToken } = require("../utils/utils");

class AdminService {
  constructor() {
    this.adminRepository = new AdminRepository();
  }

  async createAdmin(data) {
    try {
      const { password } = data;
      const hashedPassword = await generateHash(password);
      data.password = hashedPassword;
      const admin = await this.adminRepository.create(data);
      return admin;
    } catch (error) {
      const status = error.status || 500;
      throw new ApiError(status, error.message);
    }
  }

  async loginAdmin(email, password) {
    try {
        const admin = await this.adminRepository.findByEmail(email);
        if (!admin) {
            throw new ApiError(404, 'Admin not found');
        }

        const isPasswordValid = await compareHash(password, admin.password);
        if (!isPasswordValid) {
            throw new ApiError(401, 'Invalid password');
        }

        const token = await generateToken(admin.admin_id);
        return token;
    } catch (error) {
        const status = error.status || 500;
        throw new ApiError(status, error.message);
    }
  }

  async getAdmin(adminId) {
    try {
        const admin = await this.adminRepository.findById(adminId);
        if (!admin) {
            throw new ApiError(404, 'Admin not found');
        }
        return admin;
    } catch (error) {
        const status = error.status || 500;
        throw new ApiError(status, error.message);
    }
  }

}

module.exports = AdminService;
