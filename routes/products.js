'use strict';

const { Router } = require('express');
const router = Router();
const { getProducts, getOneProduct, postOneProduct, putOneProduct, deleteOneProduct } = require('../controllers/productsCtrl');

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.post('/Products', postOneProduct);
router.put('/Products/:id', putOneProduct);
router.delete('/Products/:id', deleteOneProduct);

module.exports = router;