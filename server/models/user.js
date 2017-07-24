const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('user', {
        userId: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 25]
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 25]
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 25]
            }
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 25]
            }
        },
        bio: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        sign_up: {
            type: Sequelize.DATEONLY,
            defaultValue: Sequelize.NOW
        }
    });

    User.associate = (models) => {
        User.hasMany(models.photos, {
            foreignKey: 'userId',
            as: 'photos',
          });
        User.hasMany(models.comments, {
            foreignKey: 'userId',
            as: 'comments',
          });
        User.hasMany(models.likes, {
            foreignKey: 'userId',
            as: 'likes',
          });
    }

    return User;
}