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

module.exports = { getAllProducts, getSingleProduct };