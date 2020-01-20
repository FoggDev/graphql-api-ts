import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas-ts'

const resolversArray = fileLoader(path.join(__dirname, './'))

export default mergeResolvers(resolversArray, { all: true })
