'use strict';

const { getAllProducts, getSingleProduct } = require('../Model/Products');

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