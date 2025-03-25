const Joi = require("joi");
const ApiResponse = require("../utils/ApiResponse");

const createAddressSchema = Joi.object({
    line1: Joi.string().required(),
    line2: Joi.string(),
    landmark: Joi.string(),
    pincode: Joi.string().required(),
    city: Joi.string().required(),
    district: Joi.string().required(),
    state: Joi.string().required()
})

const validateAddress = (req, res, next) => {
    const { error } = createAddressSchema.validate(req.body);
    if (error) {
        return res.status(400).json(ApiResponse.error(error.message, null, 400));
    }
    next();
}

module.exports = { validateAddress };