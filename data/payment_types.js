'use strict';

const faker = require('faker');

module.exports.generatePaymentTypes = (customersLen) => {
  let payment_types = [];

  for (let i = 0; i < 25; i++) {
    let type = faker.finance.transactionType();
    let account_number = faker.finance.account();
    let customer_id = [Math.floor(Math.random() * customersLen) + 1];

    payment_types.push({
      "payment_type": type,
      account_number,
      customer_id
    });
  }
  return payment_types;
};