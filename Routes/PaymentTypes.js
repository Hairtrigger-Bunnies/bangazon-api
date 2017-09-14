"use strict";

const { Router } = require("express");
const router = Router();
const {
  getPaymentTypes,
  getOnePaymentType,
  addPaymentType
} = require("../Controllers/PaymentTypeCtrl");

router.get("/PaymentTypes", getPaymentTypes);
router.get("/PaymentTypes/:id", getOnePaymentType);
router.post("/PaymentTypes", addPaymentType);
// router.get("/PaymentTypes/:id", editPaymentType);

module.exports = router;
