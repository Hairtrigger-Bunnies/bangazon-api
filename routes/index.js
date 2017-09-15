"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./orders"));
router.use(require("./products"));
router.use(require("./customers"));
router.use(require("./productTypes"));
router.use(require("./paymentTypes"));
router.use(require("./orderProducts"));

router.get("/", (req, res) => {
  //provide endpoints
  res.json({
    orders: "/bangazon-api/orders",
    products: "/bangazon-api/products",
    productTypes: "/bangazon-api/productTypes",
    paymentTypes: "/bangazon-api/paymentTypes",
    customers: "/bangazon-api/customers",
    orderProducts: "/bangazon-api/orderProducts"
  });
});

module.exports = router;
