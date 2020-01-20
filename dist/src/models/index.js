"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const sequelize_1 = require("sequelize");
// Configuration
const config_1 = require("../../config");
// Db Connection
const { dialect = 'postgres', port, host, database, username, password } = config_1.db;
const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`;
const sequelize = new sequelize_1.Sequelize(uri);
// Models
const models = {
    Post: sequelize.import('./Post'),
    Tag: sequelize.import('./Tag'),
    User: sequelize.import('./User'),
    sequelize
};
Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});
exports.default = models;
//# sourceMappingURL=index.js.map