'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./ProductType'));

router.get('/', (req, res) => {
  res.json({
    "Product Type": "/bangazon-api/ProductType"
  });
});

module.exports = router;

