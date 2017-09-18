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
	// if (user) {
	// 	addProductToOrder(this.id)
	// 	.then( (data) => {
	// 		res.status(200).json(data);
	// 	})
	// } else {
		addNewOrder(req.body)
		.then( (data) => {
			addProductToOrder(req.body);
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

//addprod to order = () =>{
// is order for user? if false create new order.then(that latestid){  }
//}

module.exports.getOrderProduct = (req, res, next) => {
	getOrderProduct(req.body)
	.then((data) => {
			res.status(200).end('added');
	})
	.catch((err)=>{
			next(err);
	})
}

