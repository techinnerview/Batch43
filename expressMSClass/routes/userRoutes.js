const express = require("express");
const router = express.Router();


//Product
router.get('/', (req, res) => {
    console.log("Default API called")
    res.send("GET API Called Users")
})

router.get('/getAllUsers', (req, res) => {
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
    console.log("getAllUsers API is Called")
    res.send(prod);
})

router.post("/addUser", (req, res) => {
    const newProduct = {
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    }
    // data will be saved in you mongo db
    
    res.send(newProduct)
})

router.post("/addMultipleUser", (req, res) => {
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

router.put('/updateUser/:id', (req, res) => {
    res.send("User Updated Scuuessfully, User is: " + req.params.id);
})

router.delete('/deleteUser/:id([0-9]{5})', (req, res) => {
    res.send("User Deleted Successfully, User is: " + req.params.id);
})
router.delete('/deleteUser/:id([0-9]{5})/:name([a-zA-Z]{4})', (req, res) => {
    res.send("User Deleted Successfully, User Id is: " + req.params.id + "User Name is: " + req.params.name);
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
        message: "User API NOT FOUND"
    }
    res.send(responseObj)
})


module.exports = router;
