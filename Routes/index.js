'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./Products'));
router.use(require('./Customers'));

router.get('/', (req, res) => {
  res.json({
    "Products": "bangazon/Products"
  });
});

module.exports = router;