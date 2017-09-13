//task 12- JT & AH Tuesday Sept 12
// Display Customers that haven't placed an Order #12
// By using the URL parameter /customers/?active=false, 
// the JSON response should only contain customers that don't 
// have any orders placed yet.

'use strict';

const { getAll, getOne, getCheap } = require('../Model/Customers');

module.exports.getCustomers = (req, res, next) => {
  getAll()
  .then( (direx) => {
    console.log(req.query.active);
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

module.exports.getCheapCustomer = (req, res, next) => {
  console.log("get cheaper ctl");
  getCheap()
  .then( (direx) => {
    res.status(200).json(direx);
  })
  .catch( (err) => next(err));
};
