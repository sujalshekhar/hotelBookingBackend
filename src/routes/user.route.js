const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const { validateUser } = require('../validations/user.validation');
const validateToken = require('../middlewares/validateToken.middleware');

const userController = new UserController();

router.post('/create', [validateUser], userController.createUser);
router.post('/login', userController.loginUser);
router.get('/', [validateToken], userController.getUser);

module.exports = router;