// generate a bunch of customers with Faker
'use strict';

const faker = require('faker')

module.exports.generateCustomers = () => {
  let customers = [];

  for (let i = 0; i < 50; i++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    
    //TAKES DATE AND RETURNS DATE FORMAT THAT FAKER CAN USE
    function formatDate(data) {
      var date = new Date(data),
          month = '' + (date.getMonth() + 1),
          day = '' + date.getDate(),
          year = date.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [year, month, day].join('-');
    }

    //LAST LOGIN TO BE VARIED, BUT CANNOT BE BEFORE CREATION DATE
    let past_date = faker.date.past(2);
    let now = Date.now();
    let creation_date = past_date.toISOString();
    let last_login = faker.date.between(formatDate(past_date), formatDate(now)).toISOString();

    let email = faker.internet.email();
    let address = faker.address.streetAddress();
    let phone = faker.phone.phoneNumberFormat();

    customers.push({
      "first_name": first_name,
      "last_name": last_name,
      "creation_date": creation_date,
      "last_login": last_login,
      "email": email,
      "address": address,
      "phone_number": phone
    });
  }
  
  return customers;
}