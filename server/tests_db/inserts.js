const Sequelize = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

UserTest = () => {
    const User = sequelize.import('../models/user.js');

    User.create({
        username: 'Testy',
        password: 'pwtest',
        email: 'test@gmail.com',
        first_name: 'Testing',
        last_name: 'Tester',
        bio: 'I am an insert test'
    }).then(() => {
        console.log('Successfully created user')
    }).catch(err => {
        console.log('Unable to execute insert', err)
    });
}

module.exports = { UserTest }