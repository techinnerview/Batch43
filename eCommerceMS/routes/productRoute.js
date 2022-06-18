var express = require("express");
var router = express.Router();
var productSchema = require("../models/productsModel")


router.post('/addProduct', (req, res) => {
    var productToAdd = new productSchema({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost
    })

    productToAdd.save((err, response) => {
        if (err)
            res.send("Exception Occurred");
        else
            res.send({ status: 200, message: "Product Added Successfully", product: response })
    });
});


router.get('/getAllProducts', (req, res) => {
    res.send("This is a response Data");
});

module.exports = router;