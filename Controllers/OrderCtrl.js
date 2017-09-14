"use strict";

const { getAllOrders, getSingleOrder } = require("../Model/Orders");

module.exports.getOrders = (req, res, next) => {
  getAllOrders()
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => {
      next(err);
    });
};

module.exports.getOneOrder = ({ params: { id } }, res, next) => {
  getSingleOrder(id)
    .then(single => {
      res.status(200).json(single);
    })
    .catch(err => {
      next(err);
    });
};
