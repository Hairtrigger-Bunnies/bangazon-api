// Verbs to be supported

// GET
// POST
// PUT
// DELETE
// User should be able to GET a list of products, and GET a single product.

'use strict';
const { Router } = require('express');
const router = Router();

const { getProducts, getOneProduct } = require('../Controllers/ProductsCtrl');

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);

module.exports = router;