"use strict";

const { Router } = require("express");
const router = Router();
const { getPaymentTypes, getOnePaymentType } = require("../Controllers/PaymentTypeCtrl");

router.get("/PaymentTypes", getPaymentTypes);
router.get("/PaymentTypes/:id", getOnePaymentType);

module.exports = router;
