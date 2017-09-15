'use strict';

const faker = require('faker')

module.exports.generateCustomers = () => {
  let customers = [];

  for (let i = 0; i < 50; i++) {
    let name = ;
    let expense_budget = ;
    let supervisor = ;

    customers.push({
      "department_name": name,
      "expense_budget": expense_budget,
      "supervisor": supervisor
    });
  }

  return customers;
}