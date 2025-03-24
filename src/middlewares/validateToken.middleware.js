const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const { JWT_SECRET } = require("../config/config.env");

const validateToken = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token) {
            throw new ApiError(401, "Token is required");
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        if(!decoded) {
            throw new ApiError(401, "Invalid token");
        }

        req.id = decoded.id;
        next();

    } catch(error) {
        next(error);
    }
}

module.exports = validateToken;