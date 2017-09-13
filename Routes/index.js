"use strict";

const { Router } = require("express");
const router = Router();

router.use(require('./Products'));
router.use(require('./Customers'));

router.get("/", (req, res) => {
  res.json({

    "PaymentType": "bangazon/PaymentType"
    
    "Products": "bangazon/Products"
    "customers": "bangazon/Customer"

  });
});

module.exports = router;
