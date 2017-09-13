"use strict";

const { Router } = require("express");
const router = Router();

const {
  getPaymentType,
  getOnePaymentType
} = require("../Controllers/PaymentTypeCtrl");

router.get("/PaymentType", getPaymentType);
router.get("/PaymentType/:id", getOnePaymentType);

module.exports = router;
