'use strict';

const { getAllCustomers, getSingleCustomer, postSingleCustomer, putSingleCustomer, deleteSingleCustomer } = require('../Model/Customers');

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

module.exports.postOneCustomer = (req, res, next) => {
  postSingleCustomer(req.body)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.putOneCustomer = (req, res, next) => {
  putSingleCustomer(req.body)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.deleteOneCustomer = ({params: {id}}, res, next) => {
  deleteSingleCustomer(id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};