'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');

const getAllOrders = () => {
        // console.log("getting shows", getAll);
        return new Promise( (resolve, reject) => {
            db.all(`SELECT * FROM Orders`, (err, orders) => {
                if (err) return reject(err);
                console.log("orders", orders);
                resolve(orders);
            });
        });
    };

const getSingleOrder = (id) => {
        return new Promise( (resolve, reject) => {
            db.get(`SELECT * FROM Orders                   
                    WHERE OrderID = ${id}`, (err, single) => {
                  // prop on db item ^^^
                if (err) return reject(err);
                resolve(single);
            });
        });
    };

module.exports = { getAllOrders, getSingleOrder };
