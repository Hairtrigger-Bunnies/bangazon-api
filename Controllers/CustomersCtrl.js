'use strict';

const { getAllCustomers, getSingleCustomer } = require('../Model/Customers');

module.exports.getCustomers = (req, res, next) => {
  getAllCustomers()
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.getOneCustomer = ({params: {id}}, res, next) => {
  getSingleCustomer(id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};