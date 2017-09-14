"use strict";

const { getAllPaymentTypes, getSinglePaymentType } = require("../models/PaymentTypes");

module.exports.getPaymentTypes = (req, res, next) => {
  getAllPaymentTypes()
    .then(Datas => {
      res.status(200).json(Datas);
    })
    .catch(err => {
      next(err);
    });
};

module.exports.getOnePaymentType = ({ params: { id } }, res, next) => {
  getSinglePaymentType(id)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};
