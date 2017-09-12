'use strict';

const { Router } = require('express');
const router = Router();
const { getOrders, getOneOrder } = require('../Controllers/OrderCtrl');

router.get('/Orders', getOrders);
router.get('/Orders/:id', getOneOrder);

module.exports = router;