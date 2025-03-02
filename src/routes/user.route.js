const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;