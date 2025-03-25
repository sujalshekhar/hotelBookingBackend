const BaseRepository = require("./base.repository");
const { Transaction } = require("../models");

class TransactionRepository extends BaseRepository {
    constructor() {
        super(Transaction);
    }
}

module.exports = TransactionRepository;