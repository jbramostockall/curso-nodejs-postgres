const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool')
const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {
    this.pool = pool
  }

  async create(data) {
    const newUser = await models.User.create(data)
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll({
      include: ['customer']
    })
    // const query = 'SELECT * FROM tasks'
    // const rta = await this.pool.query(query)
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if (!user) {
      throw boom.notFound('User no encontrado')
    }
    return user
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id)
    const rta = await user.destroy()
    return rta
  }
}

module.exports = UserService;
