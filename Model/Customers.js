const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');

module.exports = {
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM customers`, (err, direx) => {
        if (err) return reject(err);
        resolve(direx);
      });
    });
  }
}

module.exports = {
  getOne: (id) => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT first_name, last_name FROM Customers WHERE CustomerID = ${id}`, (err, direx) => {
        if (err) return reject(err);
        resolve(direx);
      });
    });
  }
}