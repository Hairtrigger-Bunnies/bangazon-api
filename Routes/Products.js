'use strict';

const { Router } = require('express');
const router = Router();
const { getProducts, getOneProduct, postNewProduct } = require('../Controllers/ProductsCtrl');

router.get('/Products', getProducts);
router.get('/Products/:id', getOneProduct);
router.post('/Products', postNewProduct);


module.exports = router;