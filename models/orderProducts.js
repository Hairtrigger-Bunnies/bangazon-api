"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazoncorp.sqlite");

const getAllOrderProducts = () => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT OrderID, order_date, payment_type_id, customer_id FROM Orders`,
      (err, orders) => {
        if (err) return reject(err);
        resolve(orders);
      }
    );
  });
};

module.exports = { getAllOrderProducts };
