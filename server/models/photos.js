const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('photos', {
        photo_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrements: true
        },
        user_id: {
            type: Sequelize.UUID,
            allowNull: false
        },
        caption: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        image_path: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date_created: {
            type: Sequelize.DATEONLY,
            defaultValue: Sequelize.NOW
        }
    })
}