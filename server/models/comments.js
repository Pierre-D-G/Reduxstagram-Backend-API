const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let Comments = sequelize.define('comments', {
        comment_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrements: true
        },
        photo_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        comment: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    Comments.associate = (models) => {
        Comments.belongsTo(models.user, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }),
        Comments.belongsTo(models.photos, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
    }

    return Comments;
}