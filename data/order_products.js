'use strict';

module.exports.generateOrderProducts = (orders, products) => {
  let orderProducts = [];

  for (let i = 0; i < 3; i++) {

    // console.log('prod', products);
    //MAKE SURE ORDERS CAN ONLY BE PLACED BETWEEN THE TIME A CUSTOMER IS CREATED AND LAST LOGGED ON
    let ProductID = [i + 1];
    let OrderID = [i + 1];

    orderProducts.push({
      OrderID,
      ProductID
    });
  }
  return orderProducts;
};