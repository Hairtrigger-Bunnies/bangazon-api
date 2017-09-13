'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./ProductTypes'));

router.get('/', (req, res) => {
  res.json({
    "ProductTypes": "/bangazon-api/ProductTypes"
  });
});

module.exports = router;

