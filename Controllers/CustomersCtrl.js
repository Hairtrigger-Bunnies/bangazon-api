//task 12- JT & AH Tuesday Sept 12
// Display Customers that haven't placed an Order #12
// By using the URL parameter /customers/?active=false, 
// the JSON response should only contain customers that don't 
// have any orders placed yet.

'use strict';

const { getAll, getCheap } = require('../Models/Customers');

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

module.exports.getCheapCustomer = (req, res, next) => {
  console.log("get cheap from ctrl");
  getCheap()
  .then( (direx) => {
    res.status(200).json(direx);
  })
  .catch( (err) => next(err));
};
