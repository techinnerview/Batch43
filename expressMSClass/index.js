const express = require("express");
const app = express();
const mongoose =require("mongoose");
const dbUrl = require("./properties").dbUrl; 

const bodyParser = require("body-parser");
const products = require('./routes/productRoutes');
const orders = require('./routes/orderProutes');
const users = require('./routes/userRoutes');

app.use(bodyParser.json());
mongoose.connect(dbUrl);
mongoose.connection.on("connected", () => {
    console.log("Connection Established with MongoDB")
})


app.use('/product', products);
app.use('/order', orders);
app.use('/user', users);

app.use('/', (req, res, next) => {
    console.log("default API called '/'");
    next();
})
app.get('/', (req, res) => {
    console.log("Default API called")
    res.send("GET API Called")
})
// app.listen(8081, (req, res) => {
//     console.log("API is running in PORT 8081");
// })