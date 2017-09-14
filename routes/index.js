'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./orders'));
router.use(require('./products'));
router.use(require('./customers'));
router.use(require('./productTypes'));
router.use(require('./paymentTypes'));

router.get('/', (req, res) => {
    //provide endpoints
    res.json({
        "Orders": "/bangazon-api/orders",
        "Products": "/bangazon-api/products",
        "ProductTypes": "/bangazon-api/productTypes",
        "PaymentTypes": "/bangazon-api/paymentTypes",
        "Customers": "/bangazon-api/customers"
    });
});


module.exports = router;

