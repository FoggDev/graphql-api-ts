"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_mock_1 = __importDefault(require("sequelize-mock"));
const fogg_utils_1 = require("fogg-utils");
const Post_1 = __importDefault(require("../Post"));
const sequelize = new sequelize_mock_1.default();
const DataTypes = sequelize.Sequelize;
const model = Post_1.default(sequelize, DataTypes);
const schema = model._defaults;
describe('#Post', () => {
    it('should have correct model name', () => {
        expect(model.name).toBe('Post');
    });
    it('should match the schema', () => {
        expect(schema).toEqual({
            id: {
                primaryKey: true,
                allowNull: false,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4()
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            slug: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            readingTime: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: '3 min'
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            language: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'es'
            },
            image: {
                type: DataTypes.STRING
            },
            published: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        });
    });
    it('should have associate method', () => {
        expect(fogg_utils_1.isFunction(model.associate)).toBe(true);
    });
});
//# sourceMappingURL=Post.test.js.map