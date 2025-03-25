const RateRepository = require('../repositories/rate.repository');
const ApiError = require('../utils/ApiError');

class RateService {
    constructor() {
        this.rateRepository = new RateRepository();
    }

    async createRate(data) {
        try {
            const rate = await this.rateRepository.create(data);
            return rate;
        } catch (error) {
            const status = error.status || 500;
            throw new ApiError(error.message, status);
        }
    }
}

module.exports = RateService;