const ApiResponse =  require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    if(!(err instanceof ApiError)){
        statusCode = 500;
        message = "Internal server error";
    }

    res.status(statusCode).json(ApiResponse.error(message, statusCode));
}

module.exports = errorHandler;