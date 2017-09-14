"use strict";

const {
  getAllPaymentTypes,
  getSinglePaymentType,
  addNewPaymentType,
  editNewPaymentType,
  deleteSinglePaymentType
} = require("../models/PaymentTypes");

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

module.exports.addPaymentType = (req, res, next) => {
  addNewPaymentType(req.body)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};

module.exports.editPaymentType = (req, res, next) => {
  editNewPaymentType(req.body, req.params.id)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};

module.exports.deletePaymentType = ({ params: { id } }, res, next) => {
  deleteSinglePaymentType(id)
    .then(Data => {
      res.status(200).json(Data);
    })
    .catch(err => next(err));
};
