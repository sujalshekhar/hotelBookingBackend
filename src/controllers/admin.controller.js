const AdminService = require('../services/admin.service');
const ApiResponse = require('../utils/ApiResponse');

class AdminController {
    constructor() {
        this.adminService = new AdminService();
    }

    createAdmin = async(req, res, next) => {
        try {
            const data = req.body;
            const admin = await this.adminService.createAdmin(data);
            return res.status(201).json(ApiResponse.success('Admin created successfully', admin, 201));
        } catch (error) {
            next(error);
        }
    }

    loginAdmin = async(req, res, next) => {
        try {
            const {email, password} = req.body;
            const token = await this.adminService.loginAdmin(email, password);
            return res.status(200).json(ApiResponse.success('Login successful', token, 200));
        } catch (error) {
            next(error);
        }
    }

    getAdmin = async (req, res, next) => {
        try {
            const adminId = req.id;
            const admin = await this.adminService.getAdmin(adminId);
            return res.status(200).json(ApiResponse.success('Admin found', admin, 200));   
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AdminController;