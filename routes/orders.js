'use strict';

const { Router } = require('express');
const router = Router();
const { getOrders, getOneOrder, addOrder, deleteOrder } = require('../controllers/orderCtrl');

router.get('/orders', getOrders);
router.get('/orders/:id', getOneOrder);
router.post('/orders', addOrder);
router.post('/orders/:id', addOrder);
router.delete('/orders/:id', deleteOrder);

module.exports = router;