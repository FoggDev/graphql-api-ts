// Configuration
import config from './config.json'

// Interfaces
import { IDb, ISecurity, IServer } from '../src/interfaces'

// Expors
const { db, security, server } = config

export const $db: IDb = db
export const $security: ISecurity = security
export const $server: IServer = server
