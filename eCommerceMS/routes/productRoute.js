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

router.post('/addProductMultiple', (req, res) => {
    const reqArr = req.body;
    let output = false;
    let prod = [];
    reqArr.map((item) => {
        let productToAdd = new productSchema({
            name: item.name,
            description: item.description,
            cost: item.cost
        })

        productToAdd.save((err, response) => {
            const tmp = response;
            console.log(tmp)
            if (err)
                output = false;
            else
                prod.push(tmp);
        });
    })
    if (output)
        res.send("Exception Occurred");
    else
        res.send({ status: 200, message: "Product Added Successfully" })
});



router.get('/getAllProducts', (req, res) => {
    productSchema.find((err, response) => {
        if (err)
            res.send("Exception Occurred !!");
        else
            res.send(response);
    });
});

router.get('/getProductById', (req, res) => {
    productSchema.findById(req.query.id, (err, response) => {
        if (err)
            res.send("Exception Occurred !!");
        else
            res.send(response);
    });
});

router.get('/getProductByName', (req, res) => {
    productSchema.find({ "name": req.query.name }, (err, response) => {
        if (err)
            res.send("Exception Occurred !!");
        else
            res.send(response);
    });
});

router.put('/updateProduct', (req, res) => {
    productSchema.updateMany({ "description": req.query.description }, { "name": req.body.name, "description": req.body.description, "cost": req.body.cost }, (err, response) => {
        if (err)
            res.send("Exception Occurred !!");
        else
            res.send(response);
    });
});

router.put('/updateProductById', (req, res) => {
    productSchema.findByIdAndUpdate(req.query.id, { "name": req.body.name, "description": req.body.description, "cost": req.body.cost }, (err, response) => {
        if (err)
            res.send("Exception Occurred !!");
        else
            res.send(response);
    });
});

router.delete('/deleteProductById', (req, res) => {
    productSchema.findByIdAndRemove(req.query.id, (err, response) => {
        if (err)
            res.send("Exception Occurred !!");
        else
            res.send(response);
    });
});

router.delete('/deleteProductByName', (req, res) => {
    productSchema.remove({ "name": req.query.name }, (err, response) => {
        if (err)
            res.send("Exception Occurred !!");
        else
            res.send(response);
    });
});

module.exports = router;