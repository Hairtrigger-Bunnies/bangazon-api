'use strict';

const faker = require('faker');

module.exports.generateOrders = (payTypes, customers) => {
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
    let customer_id = payTypes[i].customer_id;

    //PAYMENTTYPE.CUSTOMER_ID MUST = CUSTOMER_ID OF CUSTOMERS[I] DATES
    //ORDER DATE MUST BE BETWEEN RANGE OF THE CORRECT CUSTOMERS' DATES
    let order_date = faker.date.between(formatDate(customers[(customer_id)].past_date), formatDate(customers[(customer_id)].date_range)).toISOString();
    let payment_type_id = [i + 1];
    //PAYMENT TYPE ID MUST BE SAME AS ASSOCIATED CUSTOMER ID (IN PAYMENT TYPE TABLE, CUSTOMER HAS PAYMENTTYPEID)
    //CUSTOMERID = PAYMENT_TYPE.CUSTOMERID?

    orders.push({
      order_date,
      payment_type_id,
      customer_id
    });
  }
  return orders;
};