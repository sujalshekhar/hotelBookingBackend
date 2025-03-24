const bcrypt = require('bcryptjs');
const salt = require('../config/config.env').BCRYPT_SALT;

const generateHash = async (password) => {
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const compareHash = async (password, hash) => {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
}

module.exports = {
    generateHash, compareHash
}