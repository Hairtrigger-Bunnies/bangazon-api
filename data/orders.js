// using Faker to generate a pile of orders
'use strict';

const faker = require('faker');

module.exports.generateOrders = (payTypesLen, customers) => {
  let orders = [];

  for (let i = 0; i < 25; i++) {

    //MAKE SURE ORDERS CAN ONLY BE PLACED BETWEEN THE TIME A CUSTOMER IS CREATED AND LAST LOGGED ON
    function formatDate(data) {
      var date = new Date(data),
          month = '' + (date.getMonth() + 1),
          day = '' + date.getDate(),
          year = date.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [year, month, day].join('-');
    }

    let order_date = faker.date.between(formatDate(customers[i].past_date), formatDate(customers[i].date_range)).toISOString();
    let payment_type_id = Math.floor(Math.random() * payTypesLen) + 1;
    let customer_id = Math.floor(Math.random() * customers.length) + 1;

    orders.push({
      order_date,
      payment_type_id,
      customer_id
    });
  }
  return orders;
};