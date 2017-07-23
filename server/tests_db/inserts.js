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

dBTest = () => {
    const User = sequelize.import('../models/user.js');

    User.create({
        user_id: '3c207bbb-1e87-4a3f-8cc0-f757e4d5f643',
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
    }).then(() => {
        const Photo = sequelize.import('../models/photos.js');

        Photo.create({
            user_id: '3c207bbb-1e87-4a3f-8cc0-f757e4d5f643',
            caption: 'This the caption of a test photo',
            image_path: 'https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg'
        }).then(() => {
            console.log('Successfully uploaded a new photo');
        }).catch(err => {
            console.log('Unable to upload new photo', err)
        });
    })
}
module.exports = { dBTest }