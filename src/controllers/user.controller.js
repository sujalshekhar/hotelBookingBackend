const UserService = require("../services/user.service");
const ApiResponse = require("../utils/ApiResponse");

class UserController {

    constructor() {
        this.userService = new UserService();
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
            const token = await this.userService.loginUser(email, password);
            res.status(200).json(ApiResponse.success("User logged in", token, 200));
        } catch (error) {
            next(error);
        }
    }

    getUser = async (req, res, next) => {
        try {
            const userId = req.id;
            // console.log("this is req", req);
            const user = await this.userService.getUser(userId);
            res.status(200).json(ApiResponse.success("User found", user, 200));    
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController