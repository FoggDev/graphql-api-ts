"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apollo_server_1 = require("apollo-server");
// Utils
const fogg_utils_1 = require("fogg-utils");
// Configuration
const config_1 = require("../../config");
exports.createToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, username, password, email, privilege, active } = user;
    const token = fogg_utils_1.setBase64(`${fogg_utils_1.encrypt(config_1.security.secretKey)}${password}`);
    const userData = {
        id,
        username,
        email,
        privilege,
        active,
        token
    };
    const createTk = jsonwebtoken_1.default.sign({ data: fogg_utils_1.setBase64(userData) }, config_1.security.secretKey, { expiresIn: config_1.security.expiresIn });
    return Promise.all([createTk]);
});
exports.doLogin = (email, password, models) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models.User.findOne({
        where: { email },
        raw: true
    });
    if (!user) {
        throw new apollo_server_1.AuthenticationError('Invalid Login');
    }
    const passwordMatch = fogg_utils_1.isPasswordMatch(fogg_utils_1.encrypt(password), user.password);
    const isActive = user.active;
    if (!passwordMatch) {
        throw new apollo_server_1.AuthenticationError('Invalid Login');
    }
    if (!isActive) {
        throw new apollo_server_1.AuthenticationError('Your account is not activated yet');
    }
    const [token] = yield exports.createToken(user);
    return {
        token
    };
});
//# sourceMappingURL=auth.js.map