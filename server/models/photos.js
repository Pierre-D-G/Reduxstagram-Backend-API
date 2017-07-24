const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let Photos = sequelize.define('photos', {
        photoId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
    });

    Photos.associate = (models) => {
        Photos.belongsTo(models.user, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        }),
        Photos.hasMany(models.comments, {
          foreignKey: 'photoId',
          as: 'comments'
        }),
        Photos.hasMany(models.likes, {
          foreignKey: 'photoId',
          as: 'likes'
        })

    }

    return Photos;
}