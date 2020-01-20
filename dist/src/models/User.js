"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fogg_utils_1 = require("fogg-utils");
exports.default = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4()
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: {
                    args: true,
                    msg: 'The user just accepts alphanumeric characters'
                },
                len: {
                    args: [4, 20],
                    msg: 'The username must be from 4 to 20 characters'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email'
                }
            }
        },
        privilege: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user'
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        hooks: {
            beforeCreate: (user) => {
                user.password = fogg_utils_1.encrypt(user.password);
            }
        }
    });
    User.associate = (models) => {
        User.hasMany(models.Post, {
            foreignKey: {
                name: 'userId',
                field: 'user_id'
            },
            as: 'posts'
        });
    };
    return User;
};
//# sourceMappingURL=User.js.map