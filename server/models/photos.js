const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let Photos = sequelize.define('photos', {
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
    });

    Photos.associate = (models) => {
        Photos.belongsTo(models.user, {
            onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Photos.hasMany(models.comments, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Photos.hasMany(models.likes, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })

    }

    return Photos;
}