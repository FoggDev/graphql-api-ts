export interface IDb {
  dialect: string
  host: string
  port: number
  database: string
  username: string
  password: string
}

export interface ISecurity {
  secretKey: string
  expiresIn: string
}

export interface IServer {
  port: number
}

export interface IUser {
  id: string
  username: string
  password: string
  email: string
  privilege: string
  active: boolean
  token: string
}

export interface ITag {
  id: string
  name: string
}

export interface IPost {
  id: string
  userId: string
  title: string
  slug: string
  content: string
  readingTime: string
  language: string
  image: string
  published: boolean
  createdAt: Date
  updatedAt: Date
  tags: ITag[]
}

export interface IModels {
  Post: IPostModel
  Tag: object
  User: IUserModel
  sequelize: object
}

export interface IUserModel {
  findAll: (args: object) => IUser
  findOne: (args: object) => IUser
}

export interface IPostModel {
  count: () => number
  findAll: (args: object) => IPost
  findByPk: (id: string, args: object) => IUser
}
