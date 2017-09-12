//task 12- JT & AH Tuesday Sept 12
// Display Customers that haven't placed an Order #12
// By using the URL parameter /customers/?active=false, 
// the JSON response should only contain customers that don't 
// have any orders placed yet.
'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports = {
  getAll: () => {
    // return new Promise( (resolve, reject) => {
    //   db.all(`SELECT * FROM customers`, (err, direx) => {
    //     if (err) return reject(err);
    //     resolve(direx);
    //   });
    // });
  }
}