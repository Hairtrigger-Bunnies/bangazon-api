'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');


const getAllEmployees = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Employees`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getSingleEmployee = (id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Employees 
            WHERE EmployeeID = ${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const postSingleEmployee = (body) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO Employees (first_name, last_name, department_id, email, address, phone_number, is_supervisor) VALUES (
      '${body.first_name}', 
      '${body.last_name}', 
      '${body.department_id}',
      '${body.email}',
      '${body.address}',
      '${body.phone_number}',
      '${body.is_supervisor}')`, (err, data) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(data);
    });
  });
};

const putSingleEmployee = (body, id) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE Employees 
            SET first_name = '${body.first_name}', 
                last_name = '${body.last_name}', 
                department_id = '${body.department_id}', 
                email = '${body.email}', 
                address = '${body.address}', 
                phone_number = '${body.phone_number}', 
                is_supervisor = '${body.is_supervisor}'
            WHERE EmployeeID = '${id}'`, (err, data) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(data);
    });
  });
};

const deleteSingleEmployee = (id) => {
  return new Promise( (resolve, reject) => {
    db.run(`DELETE FROM Employees 
            WHERE EmployeeID = '${id}'`, (err, data) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = { getAllEmployees, getSingleEmployee, postSingleEmployee, putSingleEmployee, deleteSingleEmployee };
