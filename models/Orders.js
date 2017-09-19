'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');
const { getSingleProduct } = require('./products');

const getAllOrders = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Orders`, (err, orders) => {
   	  if (err) return reject(err);
			resolve(orders);
		});
	});
};

const addProductOrder = (order) => {
		console.log('order', order);
		let completeOrder = {
			"order_id": order[0].OrderID,
			"order_date": order[0].order_date,
			"payment_type_id": order[0].payment_type_id,
			"customer_id": order[0].customer_id,
			"order_products": []
		};
		order.forEach( orderProd => {
			completeOrder.order_products.push({
			"product_id": orderProd.ProductID, 
			"name": orderProd.title, 
			"price": orderProd.price});
		})
		return completeOrder;
}

const getSingleOrder = (id) => {
  return new Promise( (resolve, reject) => {
		db.all(`SELECT * FROM Orders          
						LEFT JOIN Order_Products ON Orders.OrderID = Order_Products.OrderID 
						LEFT JOIN Products ON Products.ProductID = Order_Products.ProductID         
            WHERE Orders.OrderID = ${id}`, (err, single) => {
			if (err) return reject(err);
			console.log('single', single);
			resolve(addProductOrder(single));
			// else return reject("Sorry, order doesn't exist");
		});
  });
};


const addNewOrder = (body) => {
	return new Promise( (resolve, reject) => {
		console.log('adding new order');
		db.run(`INSERT INTO Orders (order_date, payment_type_id, customer_id) VALUES (
						'${body.order_date}', 
						'${body.payment_type_id}', 
						'${body.customer_id}')`, function(err, data) {
			if (err) return reject(err);
			resolve(data.lastID);
		});
	});
};

const addProductToOrder = (body, id) => {
	return new Promise( (resolve, reject) => {
		console.log('adding product');
		console.log('this', id);
			db.run(`INSERT INTO Order_Products (OrderID, ProductID) VALUES (${id}, 
				${body.product_id})`, (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});
}

// const editSingleOrder = (body, id) => {
// 	console.log('bodymod', body);
// 	console.log('idmod', id);	
// 	return new Promise( (resolve, reject) => {
// 		db.run(`UPDATE Orders SET
// 						order_date = '${body.order_date}',
// 						payment_type_id = '${body.payment_type_id}',
// 						customer_id = '${body.customer_id}'
// 						WHERE OrderID = '${id}'`, (err, data) => {
// 			if (err) return reject(err);
// 			resolve(data);
// 		});
// 	});
// };

const deleteSingleOrder = (id) => {
	console.log('id', id);
	return new Promise( (resolve, reject) => {
		db.run(`DELETE FROM Orders
						WHERE OrderID = ${id}`, (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});
};

module.exports = { getAllOrders, getSingleOrder, addNewOrder, deleteSingleOrder, addProductToOrder };
