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

module.exports = { getAllOrders, getSingleOrder };
