const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('likes', {
        photo_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}