//task 3- Humphrey- Allow developers to access Product resource
// Verbs to be supported

// GET
// POST
// PUT
// DELETE
// User should be able to GET a list of products, and GET a single product.

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports = {
  getAll: () => {
      console.log("all products");
    // return new Promise( (resolve, reject) => {
    //   db.all(`SELECT * FROM products`, (err, product) => {
    //     if (err) return reject(err);
    //     resolve(product);
    //   });
    // });
  }
}