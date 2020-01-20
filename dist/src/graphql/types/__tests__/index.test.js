"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe('#typeDefs', () => {
    it('should match the GraphQL schema', () => {
        expect(index_1.default).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.test.js.map