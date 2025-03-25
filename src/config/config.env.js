require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    BCRYPT_SALT: process.env.BCRYPT_SALT || 10,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
}


// "development": {
//     "username": "sql12768763",
//     "password": "VVc8i9nnZ9",
//     "database": "sql12768763",
//     "host": "sql12.freesqldatabase.com",
//     "dialect": "mysql"
//   },