//task 3- Humphrey- Allow developers to access Product resource
// Verbs to be supported

// GET
// POST
// PUT
// DELETE
// User should be able to GET a list of products, and GET a single product.

'use strict';

const { getAll, getOne } = require('../Model/Products');

module.exports.getProducts = (req, res, next) => {
  getAll()
  .then( (direx) => {
    res.status(200).json(direx);
  })
  .catch( (err) => next(err));
};

module.exports.getOneProduct = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (products) => {
    res.status(200).json(products);
  })
  .catch( (err) => next(err));
};