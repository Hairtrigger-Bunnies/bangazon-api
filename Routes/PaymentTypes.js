"use strict";

const { Router } = require("express");
const router = Router();

const {
  getPaymentType,
  getOnePaymentType
} = require("../Controllers/PaymentTypeCtrl");

router.get("/PaymentTypes", getPaymentType);
router.get("/PaymentTypes/:id", getOnePaymentType);

module.exports = router;
