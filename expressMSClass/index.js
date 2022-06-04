const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("Default API called")
    res.send("GET API Called")
})

//Product
app.get('/getAllProducts', (req, res) => {
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
})

app.post("/addProduct", (req, res) => {
    const newProduct = {
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price
    }
    // data will be saved in you mongo db
    
    res.send(newProduct)
})

app.put('/updateProduct/:id', (req, res) => {
    res.send("Product Updated Scuuessfully, Product is: " + req.params.id);
})

app.delete('/deleteProduct/:id([0-9]{5})', (req, res) => {
    res.send("Product Deleted Successfully, Product is: " + req.params.id);
})
app.delete('/deleteProduct/:id([0-9]{5})/:name([a-zA-Z]{4})', (req, res) => {
    res.send("Product Deleted Successfully, Product Id is: " + req.params.id + "Product Name is: " + req.params.name);
})
app.delete('*', (req, res) => {
    const responseObj = {
        status: 404,
        message: "API NOT FOUND"
    }
    res.send(responseObj)
})


app.get('*', (req, res) => {
    const responseObj = {
        status: 404,
        message: "API NOT FOUND"
    }
    res.send(responseObj)
})

app.listen(8081, (req, res) => {
    console.log("API is running in PORT 8081");
})