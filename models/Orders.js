'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');

const getAllOrders = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Orders`, (err, orders) => {
   	  if (err) return reject(err);
			resolve(orders);
		});
	});
};

const getSingleOrder = (id) => {
  return new Promise( (resolve, reject) => {
  	db.get(`SELECT * FROM Orders                   
            WHERE OrderID = ${id}`, (err, single) => {
      if (err) return reject(err);
      resolve(single);
		});
  });
};

//PASS IN? BODY? THEN BODY.ORDER....?
const addSingleOrder = (body) => {
	return new Promise( (resolve, reject) => {
		console.log('body', body);
		db.run(`INSERT INTO Orders (order_date, payment_type_id, customer_id) VALUES (
						'${body.order_date}', 
						'${body.payment_type_id}', 
						'${body.customer_id}')`, (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});
};

const editSingleOrder = (body, id) => {
	console.log('bodymod', body);
	console.log('idmod', id);	
	return new Promise( (resolve, reject) => {
		db.run(`UPDATE Orders SET
						order_date = '${body.order_date}',
						payment_type_id = '${body.payment_type_id}',
						customer_id = '${body.customer_id}'
						WHERE OrderID = '${id}'`, (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});
};

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

module.exports = { getAllOrders, getSingleOrder, addSingleOrder, editSingleOrder, deleteSingleOrder };
