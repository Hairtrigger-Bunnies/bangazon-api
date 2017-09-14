'use strict';

const { Router } = require('express');
const router = Router();
const { getCustomers, getOneCustomer, postOneCustomer, putOneCustomer, deleteOneCustomer } = require('../Controllers/CustomersCtrl');

router.delete('/Customers/:id', deleteOneCustomer);
router.post('/Customers', postOneCustomer);
router.put('/Customers', putOneCustomer);
router.get('/Customers', getCustomers);
router.get('/Customers/:id', getOneCustomer);

module.exports = router;