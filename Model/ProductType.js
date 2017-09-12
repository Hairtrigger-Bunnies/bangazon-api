'use strict';

// Below is the requirements this controller will handle:
// Verbs to be supported:
// GET
// POST
// PUT
// DELETE
// User should be able to GET a list, and GET a single item.

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports = {
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all('SELECT * FROM Product_Type', (err, Data) => {
        if(err) return reject(err);
        resolve(Data);
      });
    });
  },
  getOne: (category) => {

  }
}