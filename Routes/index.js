"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./Products"));

router.get("/", (req, res) => {
  res.json({
    PaymentType: "bangazon/PaymentType"
  });
});

module.exports = router;
