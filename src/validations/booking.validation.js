const Joi = require("joi");
const ApiResponse = require("../utils/ApiResponse");

const createBookingSchema = Joi.object({
    user_id: Joi.number().required(),
    quantity: Joi.number().required(),
    status: Joi.string().required(),
    checkin_date: Joi.date().required(),
    checkout_date: Joi.date().required(),
    transaction_id: Joi.number().required(),
    room_type_id: Joi.number().required(),
})

const validateBooking = (req, res, next) => {
    const { error } = createBookingSchema.validate(req.body);
    if (error) {
        return res.status(400).json(ApiResponse.error(error.message, null, 400));
    }
    next();
}

module.exports = { validateBooking };