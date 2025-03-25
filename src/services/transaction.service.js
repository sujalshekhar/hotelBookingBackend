const TransactionRepository = require("../repositories/transaction.repository");
const ApiError = require("../utils/ApiError");

class TransactionService {
    constructor() {
        this.transactionRepository = new TransactionRepository();
    }

    async createTransaction(data) {
        try {
            const transaction = await this.transactionRepository.create(data);
            return transaction;
        } catch (error) {
            const status = error.status || 500;
            throw new ApiError(status, error.message);
        }
    }
}

module.exports = TransactionService;