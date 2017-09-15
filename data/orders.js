// using Faker to generate a pile of orders
'use strict';

const faker = require('faker');

module.exports.generateOrders = (payTypesLen, customersLen) => {
  let orders = [];

  for (let i = 0; i < 25; i++) {
    let order_date = faker.date.recent().toISOString();
    let payment_type_id = Math.floor(Math.random() * payTypesLen) + 1;
    let customer_id = Math.floor(Math.random() * customersLen) + 1;

    orders.push({
      order_date,
      payment_type_id,
      customer_id
    });
  }
  return orders;
};