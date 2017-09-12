'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./customers'));

router.get('/', (req, res) => {
  res.json({
    "customers": "bangazon/customer"
  });
});

module.exports = router;