"use strict";

module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define('likes', {
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