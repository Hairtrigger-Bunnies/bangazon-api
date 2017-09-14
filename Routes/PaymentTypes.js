"use strict";

const { Router } = require("express");
const router = Router();
const {
  getPaymentTypes,
  getOnePaymentType,
  addPaymentType,
  editPaymentType,
  deletePaymentType
} = require("../Controllers/PaymentTypeCtrl");

router.get("/PaymentTypes", getPaymentTypes);
router.get("/PaymentTypes/:id", getOnePaymentType);
router.post("/PaymentTypes", addPaymentType);
router.put("/PaymentTypes/:id", editPaymentType);
router.delete("/PaymentTypes/:id", deletePaymentType);

module.exports = router;
