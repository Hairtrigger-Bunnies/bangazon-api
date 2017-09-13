'use strict';

// requires in sqlite3 so user can access database
const sqlite3 = require('sqlite3').verbose();
// creates a database that can be accessed within sqlite
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');

// exports the result of a promse
const getAll = () => {
  // returns a new promise that will either resolve or reject
  return new Promise( (resolve, reject) => {
    // runs the method all on the variable db and selects all data within the db. Then it makes the data available to be executed in the controller
    db.all(`SELECT * FROM Product_Types`, (err, direx) => {
      // if there's an error, it rejects and displays an error within the console
      if(err) return reject(err);
      // if no error, it resolves and returns the data
      resolve(direx);
    });
  });
};

const getOne = (id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Product_Types WHERE ProductTypeID = ${id}`, (err, direx) => {
      if(err) return reject(err);
      resolve(direx);
    });
  });
};

module.exports = { getAll, getOne };
