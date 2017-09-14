'use strict';

const { getAllProducts, getSingleProduct, postOneProduct } = require('../Model/Products');

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
  console.log("post new product ctrl passing in body", req.body);
  postOneProduct(req.body)
  .then( (products) => {
    res.status(200).json(products);
  })
  .catch( (err) => next(err));
};

