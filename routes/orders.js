'use strict';

const { Router } = require('express');
const router = Router();
const { getOrders, getOneOrder, addOrder, editOrder, deleteOrder } = require('../controllers/orderCtrl');

router.get('/orders', getOrders);
router.get('/orders/:id', getOneOrder);
router.post('/orders', addOrder);
router.put('/orders/:id', editOrder);
router.delete('/orders/:id', deleteOrder);

module.exports = router;