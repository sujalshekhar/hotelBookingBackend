const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/address.controller');
const { validateAddress } = require('../validations/address.validation');

const addressController = new AddressController();

router.post('/create', [validateAddress], addressController.createAddress);

module.exports = router;