'use strict';
const { Router } = require('express');
const router = Router();

const { getCustomers, getCustomer } = require('../Controllers/CustomersCtrl');

router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomer);

module.exports = router;