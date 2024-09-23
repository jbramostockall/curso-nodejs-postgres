// const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')

class CustomerService {

  constructor(){}

  async find() {
    const rta= await models.Customer.findAll(
      {
        include: ['user']
      }
    )
    return rta
  }

  async created(data) {
    const rta= await models.Customer.create(data)
    return rta
  }

}

module.exports = CustomerService;
