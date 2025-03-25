const ApiResponse =  require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");

const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    if(!(err instanceof ApiError)){
        statusCode = 500;
        message = message || "Internal server error";
    }
    console.log(err);
    res.status(statusCode).json(ApiResponse.error(message, statusCode));
}

module.exports = errorHandler;