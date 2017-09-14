'use strict';

const { Router } = require('express');
const router = Router();
const { getOrders, getOneOrder } = require('../controllers/orderCtrl');

router.get('/orders', getOrders);
router.get('/orders/:id', getOneOrder);
module.exports = router;