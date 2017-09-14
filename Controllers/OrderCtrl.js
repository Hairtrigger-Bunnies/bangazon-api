'use strict';

const { getAllOrders, getSingleOrder, addSingleOrder, editSingleOrder, deleteSingleOrder } = require('../Model/orders');

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

  .then( (single) => {
    res.status(200).json(single);
  })
  .catch( (err) => {
    next(err);
  });
};

module.exports.addOrder = (req, res, next) => {
	addSingleOrder(req.body)
	.then( (data) => {
		res.status(200).json(data);
	})
	.catch( (err) => {
		console.log('err', err);
		next(err);
	});
};

module.exports.editOrder = (req, res, next) => {
	editSingleOrder(req.body, req.params.id)
	.then( (data) => {
		res.status(200).json(data);
	})
	.catch( (err) => {
		next(err);
	});
};

module.exports.deleteOrder = ({params: {id}}, res, next) => {
	deleteSingleOrder(id)
	.then( (data) => {
		res.status(200).json(data);
	})
	.catch( (err) => {
		next(err);
	});
};

