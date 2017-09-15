'use strict';

const faker = require('faker')

module.exports.generateDepartments = () => {
  let departments = [];

  for (let i = 0; i < 50; i++) {
    let name = faker.company.companyName();
    let expense_budget = faker.commerce.price(100000.00,5000000.00, 2, "$");
    let supervisor = let dept_id = Math.floor(Math.random() * deptsLen) + 1;

    departments.push({
      "department_name": name,
      "expense_budget": expense_budget,
      "is_supervisor": supervisor
    });
  };

  return departments;
}