'use strict';

// requires in express to the object Router
const { Router } = require('express');
// sets router to equal Router and then gets executed
const router = Router();
// sets the object getProductTypes to equal the product types controller
const { getProductTypes, getOneProductType } = require('../controllers/productTypesCtrl');

// sets the route for getting all product types
router.get('/productTypes', getProductTypes);
router.get('/productTypes/:id', getOneProductType);

// exports the router so it can be used within the app 
module.exports = router;
