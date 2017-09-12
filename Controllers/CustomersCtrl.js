'use strict';

const { getAll } = require('../Models/Customers');

module.exports.getCustomers = (req, res, next) => {
  getAll()
  .then( (direx) => {
    res.status(200).json(direx);
  })
  .catch( (err) => next(err));
};

module.exports.getCustomer = ({params: {id}}, res, next) => {
  // db.get(`SELECT * FROM customers WHERE customer_id = ${id}`, (err, direx) => {
  //   if (err) return next(err);
  //   res.status(200).json(direx);
  // });
};