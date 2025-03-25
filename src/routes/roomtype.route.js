const express = require('express');
const router = express.Router();
const RoomTypeController = require('../controllers/roomtype.controller');
const { validateRoomType } = require('../validations/roomtype.validation');

const roomTypeController = new RoomTypeController();

router.post('/create', [validateRoomType], roomTypeController.createRoomType);

module.exports = router;