var mongoose = require("mongoose");

const citylistSchema = mongoose.Schema([{
    location_id: String,
    name: String,
    city: String
}])

const cityList = mongoose.model("cityList", citylistSchema);

module.exports = cityList;