"use strict";

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/bangazoncorp.sqlite");

const getAllPaymentTypes = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Payment_Types`, (err, Datas) => {
      if (err) return reject(err);
      resolve(Datas);
    });
  });
};

const getSinglePaymentType = id => {
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

const addNewPaymentType = body => {
  console.log("body", body);
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Payment_Types (payment_type, account_number, customer_id) VALUES (
      '${body.payment_type}', 
      '${body.account_number}', 
      '${body.customer_id} ')`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

const editNewPaymentType = (body, id) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE Payment_Types SET 
        payment_type = '${body.payment_type}', 
        account_number = '${body.account_number}', 
        customer_id = '${body.customer_id}' WHERE PaymentTypeID = '${id}'`,
      (err, Data) => {
        if (err) return reject(err);
        resolve(Data);
      }
    );
  });
};

const deleteSinglePaymentType = id => {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM Payment_Types WHERE PaymentTypeID = ${id}`,
      (err, Datas) => {
        if (err) return reject(err);
        resolve(Datas);
      }
    );
  });
};

module.exports = {
  getAllPaymentTypes,
  getSinglePaymentType,
  addNewPaymentType,
  editNewPaymentType,
  deleteSinglePaymentType
};
