const Joi = require("joi");
const ApiResponse = require("../utils/ApiResponse");

const createHotelSchema = Joi.object({
    hotel_name: Joi.string().required(),
    hotel_location: Joi.string().required(),
    address_id: Joi.number().required(),
    admin_id: Joi.number().required()
})

const validateHotel = (req, res, next) => {
    const { error } = createHotelSchema.validate(req.body);
    if (error) {
        return res.status(400).json(ApiResponse.error(error.message, null, 400));
    }
    next();
}

module.exports = { validateHotel };