//task 12- JT & AH Tuesday Sept 12
// Display Customers that haven't placed an Order #12
// By using the URL parameter /customers/?active=false, 
// the JSON response should only contain customers that don't 
// have any orders placed yet.
'use strict';
const { Router } = require('express');
const router = Router();

const { getCustomers, getCustomer } = require('../Controllers/CustomersCtrl');

router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomer);

module.exports = router;