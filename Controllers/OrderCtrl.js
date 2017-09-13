'use strict';

const { getAllOrders, getSingleOrder } = require('../Model/orders');


module.exports.getOrders = (req, res, next) => {
    // console.log("running");
    getAllOrders()
   .then( (orders) => {
    // console.log("run?")
    res.status(200).json(orders);    
   })
   .catch( (err) => {
    //    console.log("caught");
        next(err);
    });
};

module.exports.getOneOrder = ({params: {id}}, res, next) => {
                // req.params.id ^^^
    getSingleOrder(id)
    .then( (single) => {
    res.status(200).json(single);
    })
    .catch( (err) => {
        next(err);
    });
};