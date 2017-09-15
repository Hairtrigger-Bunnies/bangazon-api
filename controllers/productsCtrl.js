'use strict';

const { getAllProducts, getSingleProduct, postOneProduct, putOneProduct, deleteOneProduct } = require('../models/Products');

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

module.exports.postNewProduct = (req, res, next) => {
  console.log("from ctrl", req.body);
  postOneProduct(req.body)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.putNewProduct = (req, res, next) => {
  putOneProduct(req.body)
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