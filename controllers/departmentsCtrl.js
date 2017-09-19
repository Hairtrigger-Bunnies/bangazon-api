'use strict';

const { getAllDepartments, getSingleDepartment, postSingleDepartment, putSingleDepartment, deleteSingleDepartment } = require('../models/Departments');

module.exports.getDepartments = (req, res, next) => {
  getAllDepartments()
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.getOneDepartment = ({params: {id}}, res, next) => {
  getSingleDepartment(id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.postOneDepartment = (req, res, next) => {
  postSingleDepartment(req.body)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.putOneDepartment = (req, res, next) => {
  putSingleDepartment(req.body, req.params.id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.deleteOneDepartment = ({params: {id}}, res, next) => {
  deleteSingleDepartment(id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};