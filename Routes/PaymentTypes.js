"use strict";

const { Router } = require("express");
const router = Router();
const { getPaymentTypes, getOnePaymentType } = require("../Controllers/PaymentTypeCtrl");

router.get("/paymentTypes", getPaymentTypes);
router.get("/paymentTypes/:id", getOnePaymentType);

module.exports = router;
