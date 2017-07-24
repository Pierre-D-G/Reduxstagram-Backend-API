"use strict";

module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define('likes', {
    });

    Likes.associate = (models) => {
        Likes.belongsTo(models.user, {
          foreignKey: 'userId',
            onDelete: 'CASCADE'
        })

        Likes.belongsTo(models.photos, {
          foreignKey: 'photoId',
            onDelete: 'CASCADE'
        })
    }

    return Likes;
};