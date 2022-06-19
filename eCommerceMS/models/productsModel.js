var mongoose = require("mongoose");

const productSchema = mongoose.Schema([{
    name: String,
    description: String,
    cost: Number
}])

const product = mongoose.model("products", productSchema);

module.exports = product;