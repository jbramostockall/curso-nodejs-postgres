const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
module.exports = {
  development: {
    url: URI,
    dialect: 'mysql', // mysql, postgres,
  },
  production: {
    url: URI,
    dialect: 'mysql', // mysql, postgres,
  }
}