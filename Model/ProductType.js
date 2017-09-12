'use strict';

// Below is the requirements this controller will handle:
// Verbs to be supported:
// GET
// POST
// PUT
// DELETE
// User should be able to GET a list, and GET a single item.

// requires in sqlite3 so user can access database
const sqlite3 = require('sqlite3').verbose();
// creates a database that can be accessed within sqlite
const db = new sqlite3.Database('./db/mediaStore.sqlite');

// exports the result of a promse
module.exports = {
  // sets getAll to equal the result of an anonymous function
  getAll: () => {
    // returns a new promise that will either resolve or reject
    return new Promise( (resolve, reject) => {
      // runs the method all on the variable db and selects all data within the db. Then it makes the data available to be executed in the controller
      db.all(`SELECT * FROM Product_Type`, (err, prodData) => {
        // if there's an error, it rejects and displays an error within the console
        if(err) return reject(err);
        // if no error, it resolves and returns the data
        resolve(prodData);
      });
    });
    console.log('getAll data', getAll);
  }
};
