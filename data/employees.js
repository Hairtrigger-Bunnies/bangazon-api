'use strict';

const faker = require('faker')

module.exports.generateEmployees = (deptsLen) => {
  let employees = [];

  for (let i = 0; i < 50; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let dept_id = Math.floor(Math.random() * deptsLen) + 1;
    let email = faker.internet.email();
    let address = faker.address.streetAddress();
    let phone = faker.phone.phoneNumberFormat();

    employees.push({
      "first_name": firstName,
      "last_name": lastName,
      "department_id": dept_id,
      "email": email,
      "address": address,
      "phone_number": phone,
      "is_supervisor": false
    });
  }

  return employees;
}