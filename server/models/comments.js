"use strict";


module.exports = function(sequelize, DataTypes){
    const Comments = sequelize.define('comments', {
        comment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrements: true
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Comments.associate = function(models){
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
        });
    }

    return Comments;
}