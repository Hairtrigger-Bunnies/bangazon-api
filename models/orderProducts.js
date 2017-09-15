"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazoncorp.sqlite");

const getAllOrderProducts = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT OrderID, c.customer_id, payment_type_id, ProductID, Title, price, type_id FROM Orders c INNER JOIN Products p ON c.customer_id = p.customer_id`,
      (err, orders) => {
        if (err) return reject(err);
        resolve(orders);
      }
    );
  });
};

module.exports = { getAllOrderProducts };
