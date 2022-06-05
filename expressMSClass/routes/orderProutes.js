const express = require("express");
const router = express.Router();

//Orders

router.get('/', (req, res) => {
    console.log("Default API called")
    res.send("GET API Called Orders")
})


router.get('/getAllOrders', (req, res) => {
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
    console.log("getAllOrders API is Called")
    res.send(prod);
})

router.post("/addNewOrder", (req, res) => {
    const newProduct = {
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    }
    // data will be saved in you mongo db
    
    res.send(newProduct)
})

router.post("/addMultipleOrders", (req, res) => {
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

router.put('/updateOrder/:id', (req, res) => {
    res.send("Order Updated Scuuessfully, Order is: " + req.params.id);
})

router.delete('/deleteOrder/:id([0-9]{5})', (req, res) => {
    res.send("Order Deleted Successfully, Order is: " + req.params.id);
})
router.delete('/deleteOrder/:id([0-9]{5})/:name([a-zA-Z]{4})', (req, res) => {
    res.send("Order Deleted Successfully, Order Id is: " + req.params.id + "Order Name is: " + req.params.name);
})

router.delete('*', (req, res) => {
    const responseObj = {
        status: 404,
        message: "API NOT FOUND"
    }
    res.send(responseObj)
})
router.get('*', (req, res) => {
    const responseObj = {
        status: 404,
        message: "ORDER API NOT FOUND"
    }
    res.send(responseObj)
})

module.exports = router;
