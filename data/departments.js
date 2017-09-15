'use strict';

const faker = require('faker')

module.exports.generateDepartments = (empFirst, empLast, empsLen) => {
  let departments = [];

  for (let i = 0; i < 10; i++) {
    let name = faker.company.companyName();
    let expense_budget = faker.commerce.price(100000.00,5000000.00, 2, "$");
    let supervisor_first = faker.name.firstName();
    let supervisor_last = faker.name.lastName();

    departments.push({
      "department_name": name,
      "expense_budget": expense_budget,
      "supervisor_first": supervisor_first,
      "supervisor_last": supervisor_last
    });
  };

  return departments;
}