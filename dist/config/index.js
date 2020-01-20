"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Configuration
const config_json_1 = __importDefault(require("./config.json"));
exports.db = config_json_1.default.db;
exports.security = config_json_1.default.security;
exports.server = config_json_1.default.server;
//# sourceMappingURL=index.js.map