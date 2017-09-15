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

const postSingleCustomer = (body) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO Customers (first_name, last_name, creation_date, active, last_login, email, address, phone_number) VALUES (
      '${body.first_name}', 
      '${body.last_name}', 
      '${body.creation_date}',
      '${body.active}',
      '${body.last_login}',
      '${body.email}',
      '${body.address}',
      '${body.phone_number}')`, (err, data) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(data);
    });
  });
};

const putSingleCustomer = (body, id) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE Customers 
            SET first_name = '${body.first_name}', 
                last_name = '${body.last_name}', 
                creation_date = '${body.creation_date}', 
                active = '${body.active}', 
                last_login = '${body.last_login}', 
                email = '${body.email}', 
                address = '${body.address}', 
                phone_number = '${body.phone_number}'
            WHERE CustomerID = '${id}'`, (err, data) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(data);
    });
  });
};

const deleteSingleCustomer = (id) => {
  return new Promise( (resolve, reject) => {
    db.run(`DELETE FROM Customers 
            WHERE CustomerID = '${id}'`, (err, data) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(data);
    });
  });
};

const getInactiveCustomers = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Customers LEFT OUTER JOIN Orders ON Customers.CustomerID = Orders.customer_id WHERE Orders.customer_id IS NULL`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports = { getAllCustomers, getSingleCustomer, postSingleCustomer, putSingleCustomer, deleteSingleCustomer, getInactiveCustomers };
