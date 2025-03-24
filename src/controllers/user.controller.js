const UserService = require("../services/user.service");
const ApiResponse = require("../utils/ApiResponse");

class UserController {

    constructor() {
        this.userService = new UserService();
    }

    async getUser(req, res) {
        try {
            const userId = req.params.id;
            const user = await userService.get(userId);
            res.status(200).json(ApiResponse.success("User found", user));
        } catch (error) {
            next(error);
        }
    }

    createUser = async (req, res, next) => {
        try {
            const userData = req.body;
            const user = await this.userService.createUser(userData);
            res.status(201).json(ApiResponse.success("User created", user, 201));
        } catch (error) {
            next(error);
        }
    }

    loginUser = async (req, res, next) => {
        try {
            const {email, password} = req.body;
            
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res) {
        const userId = req.params.id;
        const updateData = req.body;
        const user = await userService.update(userId, updateData);
        res.json(user);
    }

    async deleteUser(req, res) {
        const userId = req.params.id;
        const user = await userService.delete(userId);
        res.json(user);
    }
}

module.exports = UserController