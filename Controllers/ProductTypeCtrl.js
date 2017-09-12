'use strict';

// Below is the requirements this controller will handle:
// Verbs to be supported:
// GET
// POST
// PUT
// DELETE
// User should be able to GET a list, and GET a single item.

const { getAll } = require('../Model/ProductTypes');

module.exports.getProductType = (req, res, next) => {
  getAll()
  .then( ())
}

// const { getAll } = require('../models/Director');

// module.exports.getDirectors = (req, res, next) => {
//   getAll()
//   .then( (direx) => {
//     res.status(200).json(direx);
//   })
//   .catch( (err) => next(err));
// };

// module.exports.getOneDirector = ({params: {id}}, res, next) => {
//   // req.params.id
//   db.get(`SELECT * FROM directors WHERE dir_id = ${id}`, (err, direx) => {
//     if (err) return next(err);
//     res.status(200).json(direx);
//   });
// };
