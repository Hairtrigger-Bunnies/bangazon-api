'use strict';

const { Router } = require('express');
const router = Router();
const { getCustomers, getOneCustomer, postOneCustomer, putOneCustomer, deleteOneCustomer } = require('../controllers/customersCtrl');

router.delete('/customers/:id', deleteOneCustomer);
router.post('/customers', postOneCustomer);
router.put('/customers/:id', putOneCustomer);
router.get('/customers', getCustomers);
router.get('/customers/:id', getOneCustomer);

module.exports = router;