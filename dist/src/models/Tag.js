"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
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
    return Tag;
};
//# sourceMappingURL=Tag.js.map