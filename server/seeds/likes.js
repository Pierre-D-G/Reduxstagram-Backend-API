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

const Likes = require('../models/').likes;

module.exports = () => {
    Likes.bulkCreate([
        {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "1"
    },
    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "2"
    },
    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "3"
    },
    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "5"
    },

    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "7"
    },
    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "8"
    },
    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "12"
    },
    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "16"
    },

    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "19"
    },
    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "21"
    },
    {
        "userId": "5e839424-6332-4eb2-beae-85d83130693f",
        "photoId": "24"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "1"
    },

    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "2"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "3"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "4"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "6"
    },

    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "7"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "9"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "11"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "13"
    },

    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "15"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "17"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "19"
    },
    {
        "userId": "891c79e7-faca-41f9-a503-2d24f932eb71",
        "photoId": "24"
    },

    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "2"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "4"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "6"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "8"
    },

    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "10"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "12"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "14"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "16"
    },

    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "18"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "20"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "22"
    },
    {
        "userId": "a7a56dae-bf1b-4119-9cb7-f375a0b27124",
        "photoId": "24"
    },

    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "1"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "3"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "5"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "7"
    },

    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "9"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "11"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "13"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "15"
    },

    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "17"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "19"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "21"
    },
    {
        "userId": "35138a95-6545-4ee8-a8a3-4fd887ae44e8",
        "photoId": "23"
    },

    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "1"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "2"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "3"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "4"
    },

    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "5"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "6"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "7"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "8"
    },

    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "9"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "10"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "11"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "12"
    },

    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "13"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "14"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "15"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "16"
    },

    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "17"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "18"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "19"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "20"
    },

    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "21"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "22"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "23"
    },
    {
        "userId": "03df81c0-5b56-46bf-ba5f-b78607ecf86f",
        "photoId": "24"
    }])
}