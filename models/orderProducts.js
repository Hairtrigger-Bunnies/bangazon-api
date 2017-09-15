"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazoncorp.sqlite");

const getAllOrderProducts = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT OrderID, c.customer_id, payment_type_id, ProductID, Title, price, type_id FROM Orders c LEFT JOIN Products p ON c.customer_id = p.customer_id`,
      (err, orders) => {
        if (err) return reject(err);
        resolve(orders);
      }
    );
  });
};

create: orderObj => {
  //this orderObj is the req.body passed from the ordersCtrl
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO orders VALUES (null, date('now'), null, ${orderObj.customer_id})`,
      function(err) {
        // have to use ES5 'function' here to keep proper 'this' scope
        if (err) {
          console.log("err", err);
          return reject(err);
        }
        console.log("row ID", this.lastID);
        db.run(
          `INSERT INTO ordersProducts values (null, ${this
            .lastID}, ${orderObj.product_id})`,
          function(err) {
            if (err) return reject(err); // need to delete new order, too?
            resolve(this.lastID);
          }
        );
      }
    );
  });
},
  (module.exports = { getAllOrderProducts });
