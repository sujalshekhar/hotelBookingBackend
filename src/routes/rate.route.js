const express = require('express');
const RateController = require('../controllers/rate.controller');
const rateController = new RateController();
const router = express.Router();
const { validateRate } = require('../validations/rate.validation');

router.post('/create', [validateRate], rateController.createRate);

module.exports = router;