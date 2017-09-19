'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazoncorp.sqlite');


const getAllDepartments = () => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Departments`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const getSingleDepartment = (id) => {
  return new Promise( (resolve, reject) => {
    db.all(`SELECT * FROM Departments 
            WHERE DepartmentID = ${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

const postSingleDepartment = (body) => {
  return new Promise( (resolve, reject) => {
    db.run(`INSERT INTO Departments (department_name, expense_budget, supervisor_first, supervisor_last) VALUES (
      '${body.department_name}', 
      '${body.expense_budget}', 
      '${body.supervisor_first}',
      '${body.supervisor_last}')`, (err, data) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(data);
    });
  });
};

const putSingleDepartment = (body, id) => {
  return new Promise( (resolve, reject) => {
    db.run(`UPDATE Departments 
            SET department_name = '${body.department_name}', 
                expense_budget = '${body.expense_budget}', 
                supervisor_first = '${body.supervisor_first}', 
                supervisor_last = '${body.supervisor_last}'
            WHERE DepartmentID = '${id}'`, (err, data) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(data);
    });
  });
};

const deleteSingleDepartment = (id) => {
  return new Promise( (resolve, reject) => {
    db.run(`DELETE FROM Departments 
            WHERE DepartmentID = '${id}'`, (err, data) => {
      if (err) {
        console.log("error", err);
        return reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = { getAllDepartments, getSingleDepartment, postSingleDepartment, putSingleDepartment, deleteSingleDepartment };
