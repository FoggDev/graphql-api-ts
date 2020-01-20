"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_mock_1 = __importDefault(require("sequelize-mock"));
const Tag_1 = __importDefault(require("../Tag"));
const sequelize = new sequelize_mock_1.default();
const DataTypes = sequelize.Sequelize;
const model = Tag_1.default(sequelize, DataTypes);
const schema = model._defaults;
describe('#Tag', () => {
    it('should have correct model name', () => {
        expect(model.name).toBe('Tag');
    });
    it('should match the schema', () => {
        expect(schema).toEqual({
            id: {
                primaryKey: true,
                allowNull: false,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4()
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });
    });
});
//# sourceMappingURL=Tag.test.js.map