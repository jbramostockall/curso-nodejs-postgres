const express = require('express');

const CustomerService = require('../services/customer.service');

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const customer = await service.created(req.body);
    res.status(201).json(customer);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
