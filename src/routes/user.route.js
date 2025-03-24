const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const { validateUser } = require('../validations/user.validation');

const userController = new UserController();

router.get('/:id', userController.getUser);
router.post('/create', [validateUser], userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;