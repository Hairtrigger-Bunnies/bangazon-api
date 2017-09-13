'use strict';

// Below is the requirements this controller will handle:
// Verbs to be supported:
// GET
// POST
// PUT
// DELETE
// User should be able to GET a list, and GET a single item.

// seting an object containing getAll to run product types within model folder
const { getAll, getOne } = require('../Model/ProductTypes');

// exporting the result of an anonymous function within getProductType while expecting require, response, and next to be passed in
module.exports.getProductTypes = (req, res, next) => {
  // executes the function getAll
  getAll()
  // then runs an anonymous function while expecting prodType to be passed in
  .then( (direx) => {
    // shows response status 200 on the json file relating to prodType
    res.status(200).json(direx);
  })
  // if there's an error, it catches and runs the error message
  .catch( (err) => next(err));
};


module.exports.getProductType = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (direx) => {
    res.status(200).json(direx);
  })
  .catch( (err) => next(err));
};
