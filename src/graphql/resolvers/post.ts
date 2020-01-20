// Interface
import { IPostModel, IModels } from '../../interfaces'

export default {
  Query: {
    getPostById: (
      _: object,
      { id }: { id: string },
      { models }: { models: IModels }
    ): IPostModel => models.Post.findByPk(id, {
      include: [{
        model: models.Tag,
        as: 'tags'
      }]
    }),
    getPostsCount: (
      _: object,
      args: object,
      { models }: { models: object }
    ): IPostModel => models.Post.count().then((count: number) => ({
      count
    })),
    getPosts: (
      _: object,
      { options = {} }: { options: any },
      { models }: { models: IModels }
    ): IPostModel => {
      const {
        orderBy = 'createdAt',
        direction = 'DESC',
        limit = false,
        offset = false
      } = options

      const args: object = {
        order: [[orderBy, direction]],
        include: [{
          model: models.Tag,
          as: 'tags'
        }],
        limit: limit > 0 ? limit : '',
        offset: offset > 0 ? offset : ''
      }

      return models.Post.findAll(args)
    }
  },
  Mutation: {
    createPost: (
      _: object,
      { input }: { input: any },
      { models }: { models: IModels }
    ): object => models.Post.create({ ...input }, {
      include: [{
        model: models.Tag,
        as: 'tags'
      }]
    })
  }
}
