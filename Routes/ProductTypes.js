'use strict';

// Below is the requirements this controller will handle:
// Verbs to be supported:
// GET
// POST
// PUT
// DELETE
// User should be able to GET a list, and GET a single item.

// requires in express to the object Router
const { Router } = require('express');
// sets router to equal Router and then gets executed
const router = Router();

// sets the object getProductTypes to equal the product types controller
const { getProductTypes, getProductType } = require('../Controllers/ProductTypesCtrl');

// sets the route for getting all product types
router.get('/ProductTypes', getProductTypes);
router.get('/ProductTypes/:id', getProductType);

// exports the router so it can be used within the app 
module.exports = router;
