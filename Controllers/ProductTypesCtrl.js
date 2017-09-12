'use strict';

// Below is the requirements this controller will handle:
// Verbs to be supported:
// GET
// POST
// PUT
// DELETE
// User should be able to GET a list, and GET a single item.

// const { getAll, getOne } = require('../models/Show');

// module.exports.getShows = (req, res, next) => {
//   getAll()
//   .then( (shows) => {
//     res.status(200).json(shows);
//   })
//   .catch( (err) => {
//     next(err);
//   });
// };

// module.exports.getOneShow = ({params: {id}}, res, next) => {
//   getOne(id)
//   .then( (show) => {
//     res.status(200).json(show);
//   })
//   .catch( (err) => next(err));
// }