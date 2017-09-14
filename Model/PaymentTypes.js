"use strict";

//task 4- Regan- Allow developers to access Payment Type resource
// Verbs to be supported

// GET
// POST
// PUT
// DELETE
// User should be able to GET a list of products, and GET a single product.

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazoncorp.sqlite");

const getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Payment_Types`, (err, Datas) => {
      if (err) return reject(err);
      resolve(Datas);
    });
  });
};

const getOne = id => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM Payment_Types WHERE PaymentTypeID = ${id}`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

module.exports = { getAll, getOne };
