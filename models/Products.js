'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');

const  getAllProducts = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM products`, (err, product) => {
      if (err) return reject(err);
      resolve(product);
    });
  });
};


const getSingleProduct = (id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT title
            FROM products
            WHERE ProductID = ${id}`, (err, product) => {
      if (err) return reject(err);
      resolve(product);
    });
  });
};

const postOneProduct = (body) => {
  console.log("model post one product");
//   return new Promise( (resolve, reject) => {
//     db.run(`INSERT INTO Customers (first_name, last_name, creation_date, active, last_login, email, address, phone_number) VALUES (
//       , (err, data) => {
//       if (err) {
//         console.log("error", err);
//         return reject(err);
//       }
//       resolve(data);
//     });
//   });
};

module.exports = { getAllProducts, getSingleProduct, postOneProduct };