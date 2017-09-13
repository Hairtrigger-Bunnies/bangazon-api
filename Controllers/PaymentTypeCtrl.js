"use strict";

//task 4- Regan- Allow developers to access Payment Type resource
// Verbs to be supported

// GET
// POST
// PUT
// DELETE
// User should be able to GET a list of products, and GET a single product.

const { getAll, getOne } = require("../Model/PaymentTypes");

module.exports.getPaymentType = (req, res, next) => {
  getAll()
    .then(Datas => {
      res.status(200).json(Datas);
    })
    .catch(err => {
      next(err);
    });
};

module.exports.getOnePaymentType = ({ params: { id } }, res, next) => {
  getOne(id)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};
