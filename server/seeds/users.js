const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false
});

const User = require('../models/').user;

module.exports = () => {

    User.bulkCreate([{
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "username": "MVZ",
        "password": "$2a$10$8n6APR6FoF.9hvuEJhUds.TlqRSHmvSGXy8fAUBXC2ApFJ55UXieS",
        "email": "mvz@gmail.com",
        "first_name": "Patrick",
        "last_name": "Dessier",
        "bio": "Living my life like its golden"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "username": "Kelli",
        "password": "$2a$10$j6inP2dyt.b5nkkIHJiU0O6myFhiVNR6hti0kOUL7BjJCprQRacvS",
        "email": "kelli@gmail.com",
        "first_name": "Kelly",
        "last_name": "Raymond",
        "bio": "Underestimated, determined"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "username": "IneyeS",
        "password": "$2a$10$Rsst1V2EvJ/6.JsiVPkBMeoWHdg1fTyblY6ag4ufhii5p4GiPgdta",
        "email": "ineyes@gmail.com",
        "first_name": "Ynez",
        "last_name": "Hernandez",
        "bio": "Soy Ynez"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "username": "Infinitiman",
        "password": "$2a$10$/1nRzPWh2nB1XtghoFcA4eW.KrQHzCFdK1Y9zBn.xeNvmOuWjwRWe",
        "email": "infinite@gmail.com",
        "first_name": "Hayden",
        "last_name": "Arends",
        "bio": "To infinity and beyond"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "username": "Jenny",
        "password": "$2a$10$M7pOckXjdkztca0h7vSYiOa2zJ/vKuT3lf2tYxpL04RzalQ4qFS3m",
        "email": "jenny@gmail.com",
        "first_name": "Jeanette",
        "last_name": "Funke",
        "bio": "I came, I saw, I conquered"
    }])
}