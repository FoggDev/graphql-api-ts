// Interfaces
import { IUserModel, IPostModel } from '../../interfaces'

// Utils
import { doLogin } from '../../utils/auth'

export default {
  Query: {
    getUsers: (
      _: object,
      args: object,
      {
        models: {
          User,
          Post,
          Tag
        }
      }: {
        models: { User: IUserModel, Post: IPostModel }
      }
    ): object => User.findAll({
      include: [{
        model: Post,
        as: 'posts',
        include: [{
          model: Tag,
          as: 'tags'
        }]
      }]
    })
  },
  Mutation: {
    createUser: (
      _: object,
      { input }: { input: object },
      { models }: { models: any }
    ): object => models.User.create({ ...input }),
    login: (
      _: object,
      { input: { email, password } }: { input: { email: string, password: string }},
      { models }: { models: any }
    ): object => doLogin({ email, password, models })
  }
}
