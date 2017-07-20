const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let Likes = sequelize.define('likes', {
        photo_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
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
}