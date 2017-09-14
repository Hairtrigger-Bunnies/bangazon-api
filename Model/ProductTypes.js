'use strict';

// requires in sqlite3 so user can access database
const sqlite3 = require('sqlite3').verbose();
// creates a database that can be accessed within sqlite
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');

// GET
const getAllProductTypes = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Product_Types`, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
};

// GET
const getSingleProductType = (id) => {
  return new Promise( (resolve, reject) => {
    db.get(`SELECT * FROM Product_Types 
            WHERE ProductTypeID = ${id}`, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
};

// POST
const addNewProductType = (body) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO Product_Types (name) VALUES ('${body.name}')`, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
};

// PUT
const editNewProductType = (body, id) => {
  return new Promise( (resolve, reject) => {
    db.run(
      `UPDATE Product_Types SET
      name = '${body.name}' WHERE ProductTypeID = '${id}'`,
      (err, data) => {
        if(err) return reject(err);
        resolve(data);
      }
    );
  });
};

// DELETE
const deleteSingleProductType = (id) => {
  return new Promise( (resolve, reject) => {
    db.run(
      `DELETE FROM Product_Types WHERE ProductTypeID = ${id}`,
      (err, data) => {
        if(err) return reject(err);
        resolve(data);
      }
    );
  });
};
module.exports = { getAllProductTypes, getSingleProductType, addNewProductType, editNewProductType, deleteSingleProductType };