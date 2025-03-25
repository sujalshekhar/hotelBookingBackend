const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin.controller');
const { validateAdmin, validateLoginDetails } = require('../validations/admin.validation');
const validateToken = require('../middlewares/validateToken.middleware');

const adminController = new AdminController();

router.post('/create', [validateAdmin], adminController.createAdmin);
router.post('/login', [validateLoginDetails], adminController.loginAdmin);
router.get('/', [validateToken], adminController.getAdmin);

module.exports = router;