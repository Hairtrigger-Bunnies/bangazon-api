'use strict';

const faker = require('faker')

module.exports.generateComputers = (empLen) => {
  let computers = [];

  for (let i = 0; i < 50; i++) {
    let assigned_employee = Math.floor(Math.random() * empLen) + 1;
    let purchase_date = faker.date.past(2).toISOString();
    let decommission_date = null;

    computers.push({
      "assigned_employee": assigned_employee,
      "purchase_date": purchase_date,
      "decommission_date": decommission_date
    });
  };

  return computers;
}