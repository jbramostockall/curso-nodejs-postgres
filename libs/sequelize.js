const { Sequelize } = require('sequelize')
const { config } = require('../config/config')
const setupModels = require('./../db/models')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'mysql', // mysql, postgres
  logging: true
})

setupModels(sequelize)

// sequelize.sync() no se recomienda sincronizar cuando es prod para eso es migrations

module.exports = sequelize