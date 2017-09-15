'use strict';

const { getAllProducts, getSingleProduct, postSingleProduct, putSingleProduct, deleteSingleProduct } = require('../models/Products');

module.exports.getProducts = (req, res, next) => {
  getAllProducts()
  .then( (products) => {
    res.status(200).json(products);
  })
  .catch( (err) => next(err));
};

module.exports.getOneProduct = ({params: {id}}, res, next) => {
  getSingleProduct(id)
  .then( (products) => {
    res.status(200).json(products);
  })
  .catch( (err) => next(err));
};

module.exports.postOneProduct = (req, res, next) => {
  console.log("from ctrl", req.body);
  postSingleProduct(req.body)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.putOneProduct = (req, res, next) => {
  putSingleProduct(req.body)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.deleteOneProduct = ({params: {id}}, res, next) => {
  deleteSingleProduct(id)
  .then( (products) => {
    res.status(200).json(products);
  })
  .catch( (err) => next(err));
};