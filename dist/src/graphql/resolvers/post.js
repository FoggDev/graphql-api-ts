"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        getPostById: (_, { id }, { models }) => {
            return models.Post.findByPk(id, {
                include: [{
                        model: models.Tag,
                        as: 'tags'
                    }]
            });
        },
        getPostsCount: (_, args, { models }) => {
            return models.Post.count().then((count) => ({
                count
            }));
        },
        getPosts: (_, { options = {} }, { models }) => {
            const { orderBy = 'createdAt', direction = 'DESC', limit = false, offset = false } = options;
            const args = {
                order: [[orderBy, direction]],
                include: [{
                        model: models.Tag,
                        as: 'tags'
                    }],
                limit: limit > 0 ? limit : '',
                offset: offset > 0 ? offset : ''
            };
            return models.Post.findAll(args);
        }
    },
    Mutation: {
        createPost: (_, { input }, { models }) => {
            return models.Post.create(Object.assign({}, input), {
                include: [{
                        model: models.Tag,
                        as: 'tags'
                    }]
            });
        }
    }
};
//# sourceMappingURL=post.js.map