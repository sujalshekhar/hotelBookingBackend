const Joi = require("joi");
const ApiResponse = require("../utils/ApiResponse");

const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(), // Validates a 10-digit mobile number
});

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().required(),
});

const validateUser = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json(ApiResponse.error(error.message, null, 400));
  }
  next();
};

const validateLoginDetails = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json(ApiResponse.error(error.message, null, 400));
  }
  next();
}

module.exports = { validateUser, validateLoginDetails };
