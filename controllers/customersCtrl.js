'use strict';

const { getAllCustomers, getSingleCustomer, postSingleCustomer, putSingleCustomer, deleteSingleCustomer, getAllInactiveCustomers } = require('../models/Customers');

module.exports.getCustomers = (req, res, next) => {
  if(req.query.active === "false"){
    getAllInactiveCustomers();
  }
  if(req.query.active === "true")
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
  putSingleCustomer(req.body, req.params.id)
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
