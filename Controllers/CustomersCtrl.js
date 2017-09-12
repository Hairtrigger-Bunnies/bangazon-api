'use strict';

const { getAll, getOne } = require('../Model/Customers');

module.exports.getCustomers = (req, res, next) => {
  getAll()
  .then( (direx) => {
    res.status(200).json(direx);
  })
  .catch( (err) => next(err));
};

module.exports.getCustomer = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (direx) => {
    res.status(200).json(direx);
  })
  .catch( (err) => next(err));
};