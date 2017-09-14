'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');


const getAllCustomers = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM customers`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getSingleCustomer = (id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Customers 
            WHERE CustomerID = ${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports = { getAllCustomers, getSingleCustomer };