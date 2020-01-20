"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../../utils/auth");
exports.default = {
    Query: {
        getUsers: (_, args, { models }) => {
            return models.User.findAll({
                include: [{
                        model: models.Post,
                        as: 'posts',
                        include: [{
                                model: models.Tag,
                                as: 'tags'
                            }]
                    }]
            });
        }
    },
    Mutation: {
        createUser: (_, { input }, { models }) => models.User.create(Object.assign({}, input)),
        login: (_, { input: { email, password } }, { models }) => auth_1.doLogin(email, password, models)
    }
};
//# sourceMappingURL=user.js.map