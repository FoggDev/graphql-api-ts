// Dependencies
import { Sequelize } from 'sequelize'

// Configuration
import { $db } from '../../config'

// Interfaces
import { IModels } from '../interfaces'

// Db Connection
const {
  dialect = 'postgres',
  port,
  host,
  database,
  username,
  password
} = $db

const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`
const sequelize = new Sequelize(uri);

// Models
const models: IModels = {
  Post: sequelize.import('./Post'),
  Tag: sequelize.import('./Tag'),
  User: sequelize.import('./User'),
  sequelize
}

Object.keys(models).forEach((modelName: string) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

export default models
