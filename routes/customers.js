'use strict';

const { Router } = require('express');
const router = Router();
const { getCustomers, getOneCustomer } = require('../controllers/customersCtrl');

router.get('/customers', getCustomers);
router.get('/customers/:id', getOneCustomer);
//router.post...
//router.put...

module.exports = router;