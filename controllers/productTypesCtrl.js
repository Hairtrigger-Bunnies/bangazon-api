'use strict';

// seting an object containing getAll to run product types within model folder
const { getAllProductTypes, getSingleProductType, addNewProductType, editNewProductType, deleteSingleProductType } = require('../models/ProductTypes');

// GET
module.exports.getProductTypes = (req, res, next) => {
  getAllProductTypes()
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

// GET
module.exports.getOneProductType = ({params: {id}}, res, next) => {
  getSingleProductType(id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

// POST
module.exports.addProductType = (req, res, next) => {
  addNewProductType(req.body)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

// PUT
module.exports.editProductType = (req, res, next) => {
  editNewProductType(req.body, req.params.id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

// DELETE
module.exports.deleteProductType = ({ params: { id }}, res, next) => {
  deleteSingleProductType(id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};