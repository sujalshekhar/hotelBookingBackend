const RateService = require('../services/rate.service');
const ApiResponse = require('../utils/ApiResponse');

class RateController {
    constructor() {
        this.rateService = new RateService();
    }

    createRate = async (req, res, next) => {
        try {
            const data = req.body;
            const rate = await this.rateService.createRate(data);
            res.status(201).json(ApiResponse.success('Rate created', rate, 201));
        } catch (error) {
            next(error);
        }
    }
}

module.exports = RateController;