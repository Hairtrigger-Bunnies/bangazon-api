'use strict';

// requires in express to the object Router
const { Router } = require("express");
// sets router to equal Router and then gets executed
const router = Router();
// sets the object getProductTypes to equal the product types controller
const { getProductTypes, getOneProductType, addProductType } = require("../Controllers/ProductTypesCtrl");

// sets the route for getting all product types
router.get("/ProductTypes", getProductTypes);
router.get("/ProductTypes/:id", getOneProductType);
router.post("/ProductTypes", addProductType);

// exports the router so it can be used within the app 
module.exports = router;
