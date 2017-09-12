//task 3- Humphrey- Allow developers to access Product resource
// Verbs to be supported

// GET
// POST
// PUT
// DELETE
// User should be able to GET a list of products, and GET a single product.

'use strict';

const { getAll } = require('../models/Products');

module.exports.getProducts = (req, res, next) => {
  getAll()
  .then( (products) => {
    res.status(200).json(products);
  })
  .catch( (err) => next(err));
};

module.exports.getOneProduct = ({params: {id}}, res, next) => {
  // req.params.id
  db.get(`SELECT * FROM products WHERE product_id = ${id}`, (err, products) => {
    if (err) return next(err);
    res.status(200).json(products);
  });
};