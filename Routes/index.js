'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./ProductType'));

router.get('/', (req, res) => {
  res.json({
    "product types": "bangazon/productType"
  });
});

// 'use strict';
 
// const { Router } = require('express');
// const router = Router();

// router.use(require('./customers'));

// router.get('/', (req, res) => {
//   res.json({
//     "customers": "bangazon/customer"
//   });
// });