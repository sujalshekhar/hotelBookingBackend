const express = require('express');
const router = express.Router();
const HotelController = require('../controllers/hotel.controller');
const { validateHotel } = require('../validations/hotel.validation');

const hotelController = new HotelController();

router.post('/create', [validateHotel], hotelController.createHotel);

module.exports = router;