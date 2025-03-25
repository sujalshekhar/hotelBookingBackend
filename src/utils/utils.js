const bcrypt = require('bcryptjs');
const salt = require('../config/config.env').BCRYPT_SALT;
const jwt = require('jsonwebtoken');
const ApiError = require('./ApiError');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config/config.env');

const generateHash = async (password) => {
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const compareHash = async (password, hash) => {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
}

const generateToken = async(id) => {
    const token = jwt.sign({id}, JWT_SECRET, {expiresIn: JWT_EXPIRATION});
    return token;
}

module.exports = {
    generateHash, compareHash, generateToken
}