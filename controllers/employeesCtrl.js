'use strict';

const { getAllEmployees, getSingleEmployee, postSingleEmployee, putSingleEmployee, deleteSingleEmployee } = require('../models/Employees');

module.exports.getEmployees = (req, res, next) => {
  getAllEmployees()
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.getOneEmployee = ({params: {id}}, res, next) => {
  getSingleEmployee(id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.postOneEmployee = (req, res, next) => {
  postSingleEmployee(req.body)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.putOneEmployee = (req, res, next) => {
  putSingleEmployee(req.body, req.params.id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.deleteOneEmployee = ({params: {id}}, res, next) => {
  deleteSingleEmployee(id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};