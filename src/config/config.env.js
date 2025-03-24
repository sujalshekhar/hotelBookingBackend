require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    BCRYPT_SALT: process.env.BCRYPT_SALT || 10,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
}