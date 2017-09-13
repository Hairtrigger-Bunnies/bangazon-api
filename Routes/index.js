'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./Orders'));
router.use(require('./Products'));
router.use(require('./Customers'));
router.use(require('./ProductTypes'));
router.use(require('./PaymentTypes'));

router.get('/', (req, res) => {
    //provide endpoints
    res.json({
        "Orders": "/bangazon-api/Orders",
        "Products": "/bangazon-api/Products",
        "ProductTypes": "/bangazon-api/ProductTypes",
        "PaymentTypes": "/bangazon-api/PaymentTypes",
        "Customers": "/bangazon-api/Customers"
    });
});


module.exports = router;

