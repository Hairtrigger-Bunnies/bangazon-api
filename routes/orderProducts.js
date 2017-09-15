const { Router } = require("express");
const router = Router();
const { getOrderProducts } = require("../controllers/orderProductsCtrl");

router.get("/orderProducts", getOrderProducts);

module.exports = router;
