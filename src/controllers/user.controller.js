const UserService = require("../services/user.service");

class UserController {
    async getUser(req, res) {
        const userId = req.params.id;
        const user = await UserService.findById(userId);
        res.json(user);
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