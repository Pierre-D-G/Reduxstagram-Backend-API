"use strict";

module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define('likes', {
        photo_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Likes.associate = (models) => {
        Likes.belongsTo(models.user, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })

        Likes.belongsTo(models.photos, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
    }

    return Likes;
};