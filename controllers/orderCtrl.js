'use strict';

const { getAllOrders, getSingleOrder, addNewOrder, editSingleOrder, deleteSingleOrder, addProductToOrder } = require('../models/Orders');

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
	//WHEN A USER EXISTS WE WILL CHECK IF USER HAS AN EXISTING ORDER TO ADD TO
	// if (user) {
	// 	addProductToOrder(this.id)
	// 	.then( (data) => {
	// 		res.status(200).json(data);
	// 	})
	// } else {
		addNewOrder(req.body)
		.then( (data) => {
			console.log('data', data);
			addProductToOrder(req.body, data);
			res.status(200).json(data);
		})
		.catch( (err) => {
			console.log('err', err);
			next(err);
		});
	}

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

module.exports.getOrderProduct = (req, res, next) => {
	getOrderProduct(req.body)
	.then((data) => {
			res.status(200).end('added');
	})
	.catch((err)=>{
			next(err);
	})
}

