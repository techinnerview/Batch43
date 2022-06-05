const express = require("express");
const router = express.Router();

router.use('/', (req, res, next) => {
    console.log("Product default API Called - Before");
    next();
})

router.get('/', (req, res, next) => {
    console.log("Default API called")
    res.send("GET API Called Products")
    next();
})

router.use('/', (req, res, next) => {
    console.log("Product default API Called - After");
    next()
})

router.use('/getAllProducts', (req, res, next) => {
    console.log("Middleware for getAllProducts API called - Before")
    next();
})

router.get('/getAllProducts', (req, res, next) => {
    const prod = [
        {
            id: 10001,
            name: "apple Laptop",
            description: "apple Laptop 5 series",
            cost: 135000
        },
        {
            id: 10002,
            name: "apple Laptop",
            description: "apple Laptop 6 series",
            cost: 185000
        }
    ]
    console.log("getAllProducts API is Called")
    res.send(prod);
    next();
})

router.use('/getAllProducts', (req, res) => {
    console.log("Middleware for getAllProducts API called - After")
})

router.post("/addProduct", (req, res) => {
    const newProduct = {
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    }
    // data will be saved in you mongo db
    
    res.send(newProduct)
})

router.post("/addMultipleProduct", (req, res) => {
    const newProduct = [{
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    },
    {
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    },
    {
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    }]
    // data will be saved in you mongo db
    
    res.send(newProduct)
})

router.put('/updateProduct/:id', (req, res) => {
    res.send("Product Updated Scuuessfully, Product is: " + req.params.id);
})

router.delete('/deleteProduct/:id([0-9]{5})', (req, res) => {
    res.send("Product Deleted Successfully, Product is: " + req.params.id);
})
router.delete('/deleteProduct/:id([0-9]{5})/:name([a-zA-Z]{4})', (req, res) => {
    res.send("Product Deleted Successfully, Product Id is: " + req.params.id + "Product Name is: " + req.params.name);
})
router.delete('*', (req, res) => {
    const responseObj = {
        status: 404,
        message: "API NOT FOUND"
    }
    res.send(responseObj)
})

router.use('*', (req, res, next) => {
   console.log("API Failed - Before")
   next();
})
router.get('*', (req, res, next) => {
    const responseObj = {
        status: 404,
        message: "PRODUCT API NOT FOUND"
    }
    res.send(responseObj);
    next();
})
router.use('*', (req, res, next) => {
    console.log("API Failed - After")
 })

module.exports = router;
