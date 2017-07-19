const Sequelize = require('sequelize');

require('dotenv').config();

db = () => {
    console.log(process.env.DB_USER)
    const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection established succesfuly');
        })
        .catch(err => {
            console.error('Unable to establish connection to the database', err)
        });
}


module.exports = { db };