'use strict';

const { Router } = require('express');
const router = Router();
const { getProducts, getOneProduct, postNewProduct } = require('../controllers/productsCtrl');

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.post('/products', postNewProduct);


module.exports = router;