require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'portfolio',
    host: /*'127.0.0.1'*/ 'localhost',
    dialect: 'mysql',
    logging: false,
  },
};
