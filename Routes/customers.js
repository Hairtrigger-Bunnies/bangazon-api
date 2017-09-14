'use strict';

const { Router } = require('express');
const router = Router();
const { getCustomers, getOneCustomer } = require('../Controllers/CustomersCtrl');

router.get('/customers', getCustomers);
router.get('/customers/:id', getOneCustomer);
//router.post...
//router.put...

module.exports = router;