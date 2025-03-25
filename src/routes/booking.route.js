const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/booking.controller');
const { validateBooking } = require('../validations/booking.validation');

const bookingController = new BookingController();

router.post('/create', [validateBooking], bookingController.createBooking);

module.exports = router;