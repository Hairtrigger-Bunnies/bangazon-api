// generate a bunch of customers with Faker
'use strict';

const faker = require('faker')

module.exports.generateCustomers = () => {
  let customers = [];

  for (let i = 0; i < 50; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let creation_date = null;
    let activity = null;
    let lastLogin = null;
    let email = faker.internet.email();
    let address = faker.address.streetAddress();
    let phone = faker.phone.phoneNumberFormat();
    // let lastLogin = faker.date.recent();    

    customers.push({
      "first_name": firstName,
      "last_name": lastName,
      "creation_date": creation_date,
      "active": activity,
      "last_login": lastLogin,
      "email": email,
      "address": address,
      "phone_number": phone
    });
  }

  return customers;
}