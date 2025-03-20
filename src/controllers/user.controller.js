const UserService = require("../services/user.service");
const ApiResponse = require("../utils/ApiResponse");

class UserController {
    async getUser(req, res) {
        try {
            const userId = req.params.id;
            const user = await UserService.get(userId);
            res.status(200).json(ApiResponse.success("User found", user));
        } catch (error) {
            next(error);
        }
    }

    async createUser(req, res) {
        const userData = req.body;
        const user = await UserService.create(userData);
        res.json(user);
    }

    async updateUser(req, res) {
        const userId = req.params.id;
        const updateData = req.body;
        const user = await UserService.update(userId, updateData);
        res.json(user);
    }

    async deleteUser(req, res) {
        const userId = req.params.id;
        const user = await UserService.delete(userId);
        res.json(user);
    }
}

module.exports = {UserController}