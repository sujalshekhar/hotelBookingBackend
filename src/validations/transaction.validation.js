const Joi = require("joi");
const ApiResponse = require("../utils/ApiResponse");

const createTransactionSchema = Joi.object({
    status: Joi.string().required(),
    amount: Joi.number().required(),
})

const validateTransaction = (req, res, next) => {
    const { error } = createTransactionSchema.validate(req.body);
    if (error) {
        return res.status(400).json(ApiResponse.error(error.message, null, 400));
    }
    next();
}

module.exports = { validateTransaction };