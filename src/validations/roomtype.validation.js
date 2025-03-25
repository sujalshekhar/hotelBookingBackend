const Joi = require("joi");
const ApiResponse = require("../utils/ApiResponse");

const createRoomTypeSchema = Joi.object({
    total_quantity: Joi.number().required(),
    hotel_id: Joi.number().required(),
    rate_id: Joi.number().required()
})

const validateRoomType = (req, res, next) => {
    const { error } = createRoomTypeSchema.validate(req.body);
    if (error) {
        return res.status(400).json(ApiResponse.error(error.message, null, 400));
    }
    next();
}

module.exports = { validateRoomType };