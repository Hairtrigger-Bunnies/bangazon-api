'use strict';

const { Router } = require('express');
const router = Router();
const { getProducts, getOneProduct } = require('../Controllers/ProductsCtrl');

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);

module.exports = router;