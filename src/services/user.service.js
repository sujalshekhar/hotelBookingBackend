const UserRepository = require("../repositories/user.repository");

class UserService {
    async findById(userId) {
        return await UserRepository.findById(userId);
    }
    
    async create(userData) {
        return await UserRepository.create(userData);
    }
    
    async update(userId, updateData) {
        return await UserRepository.update(userId, updateData);
    }
    
    async delete(userId) {
        return await UserRepository.delete(userId);
    }
}

module.exports = new UserService();