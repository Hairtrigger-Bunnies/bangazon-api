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

const postSingleProduct = (body) => {
  console.log("post new product from model");
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO Products (title, price, description, type_id, customer_id) VALUES (
      '${body.title}', 
      '${body.price}', 
      '${body.description}',
      '${body.type_id}',
      '${body.customer_id}')`, (err, products) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(products);
    });
  });
};


const putSingleProduct = (body) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE Products 
            SET title = '${body.title}', 
                price = '${body.price}', 
                description = '${body.description}', 
                type_id = '${body.type_id}', 
                customer_id = '${body.customer_id}'
            WHERE ProductID = '${id}'`, (err, products) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(products);
    });
  });
};

const deleteSingleProduct = (id) => {
  return new Promise( (resolve, reject) => {
    db.run(`DELETE FROM Products
            WHERE ProductID = '${id}'`, (err, products) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(products);
    });
  });
};

module.exports = { getAllProducts, getSingleProduct, postSingleProduct, putSingleProduct, deleteSingleProduct };