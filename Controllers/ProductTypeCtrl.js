'use strict';

// Below is the requirements this controller will handle:
// Verbs to be supported:
// GET
// POST
// PUT
// DELETE
// User should be able to GET a list, and GET a single item.

// seting an object containing getAll to run product types within model folder
const { getAll } = require('../Model/ProductTypes');

// exporting the result of an anonymous function within getProductType while expecting require, response, and next to be passed in
module.exports.getProductType = (req, res, next) => {
  // executes the function getAll
  getAll()
  // then runs an anonymous function while expecting prodType to be passed in
  .then( (prodType) => {
    // shows response status 200 on the json file relating to prodType
    res.status(200).json(prodType);
  })
  // if there's an error, it catches and runs the error message
  .catch( (err) => next(err));
};
