const Joi = require("joi");
const ApiResponse = require("../utils/ApiResponse");

const createRateSchema = Joi.object({
    amount: Joi.number().required(),
})

const validateRate = (req, res, next) => {
    const { error } = createRateSchema.validate(req.body);
    if (error) {
        return res.status(400).json(ApiResponse.error(error.message, null, 400));
    }
    next();
}

module.exports = { validateRate };