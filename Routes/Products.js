'use strict';

const { Router } = require('express');
const router = Router();
const { getProducts, getOneProduct } = require('../Controllers/ProductsCtrl');

router.get('/Products', getProducts);
router.get('/Products/:id', getOneProduct);

module.exports = router;