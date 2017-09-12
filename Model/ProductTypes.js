'use strict';

// Below is the requirements this controller will handle:
// Verbs to be supported:
// GET
// POST
// PUT
// DELETE
// User should be able to GET a list, and GET a single item.

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./db/mediaStore.sqlite');

// module.exports = {
//   getAll: () => {
//     return new Promise( (resolve, reject) => {
//       db.all(`SELECT * FROM shows`, (err, showsData) => {
//         if(err) return reject(err);
//         resolve(showsData); 
//       });
//     });
//   },
//   getOne: (id) => {
//     return new Promise( (resolve, reject) => {
//       db.get(`SELECT shows.*, directors.name AS director
//               FROM shows
//               JOIN directors ON director_id = directors.dir_id
//               WHERE show_id = ${id}`, (err, show) => {
//                 if (err) return reject(err);
//                 resolve(show);
//               });
//     });
//   }
// }

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/mediaStore.sqlite');

module.exports = {
  getAll: () => {
    return new Promise( (resolve, reject) => {
      db.all(`SELECT * FROM Product_Types`, (err, Data) => {
        if(err) return reject(err);
        resolve(Data);
      });
    });
  },
  getOne: (id) => {
    return new Promise( (resolve, reject) => {
      db.get(`SELECT Product_Types.*`,)
    })
  }
};