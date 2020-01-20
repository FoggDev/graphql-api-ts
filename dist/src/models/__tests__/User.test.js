"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_mock_1 = __importDefault(require("sequelize-mock"));
const fogg_utils_1 = require("fogg-utils");
const User_1 = __importDefault(require("../User"));
const sequelize = new sequelize_mock_1.default();
const DataTypes = sequelize.Sequelize;
const model = User_1.default(sequelize, DataTypes);
const schema = model._defaults;
describe('#User', () => {
    it('should have correct model name', () => {
        expect(model.name).toBe('User');
    });
    it('should match the schema', () => {
        expect(schema).toEqual({
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
        });
    });
    it('should have beforeCreate hook', () => {
        expect(fogg_utils_1.isFunction(model.options.hooks.beforeCreate)).toBe(true);
    });
    it('should have associate method', () => {
        expect(fogg_utils_1.isFunction(model.associate)).toBe(true);
    });
});
//# sourceMappingURL=User.test.js.map