const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/transaction.controller');
const {validateTransaction} = require('../validations/transaction.validation');

const transactionController = new TransactionController();

console.log('fun', transactionController.createTransaction)

router.post('/create', [validateTransaction], transactionController.createTransaction);

module.exports = router;