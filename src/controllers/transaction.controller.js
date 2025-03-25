const TransactionService = require("../services/transaction.service");
const ApiResponse = require("../utils/ApiResponse");

class TransactionController {
    constructor() {
        this.transactionService = new TransactionService();
    }

    createTransaction = async (req, res, next) => {
        try {
            const transaction = await this.transactionService.createTransaction(req.body);
            res.status(201).json(ApiResponse.success('Transaction created successfully', transaction, 201));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TransactionController;





// 1. Generate all the dates between the given date range -- date_range_table
// 2. After generating the dates, cross join date_range_table with room_types table to get all the room types for each date -- room_types_table
// 3. After generating the room_types_table, join it with bookings table on date and room_type_id to get the bookings for each room type on each date -- bookings_table
// 4. After generating the bookings_table, group by date and room_type_id and sum the quantity to get the total bookings for each room type on each date -- total_bookings_table
// 5. After generating the total_bookings_table, join it with room_types table on room_type_id to get the room type details -- room_type_details_table
