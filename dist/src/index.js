"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const apollo_server_1 = require("apollo-server");
// Models
const models_1 = __importDefault(require("./models"));
// Type Definitions & Resolvers
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const types_1 = __importDefault(require("./graphql/types"));
// Configuration
const config_1 = require("../config");
// Schema
const schema = apollo_server_1.makeExecutableSchema({
    typeDefs: types_1.default,
    resolvers: resolvers_1.default
});
// Apollo Server
const apolloServer = new apollo_server_1.ApolloServer({
    schema,
    context: {
        models: models_1.default
    }
});
// Running Apollo Server
const alter = true;
const force = false;
models_1.default.sequelize.sync({ alter, force }).then(() => {
    // eslint-disable-next-line no-console
    apolloServer.listen(config_1.server.port).then(({ url }) => console.log(`Running on ${url}`));
});
//# sourceMappingURL=index.js.map