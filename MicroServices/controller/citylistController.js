var citylistSchema = require("../model/citylistModel")

getCityList = (req, res, next) => {
    citylistSchema.find((err, response) => {
        console.log(response)
        if (err)
            res.send("Exception Occured")
        else
            res.send(response);
    })
}

addcity = (req, res, next) => {
    var cityToAdd = new citylistSchema({
        location_id: req.body.location_id,
        name: req.body.name,
        city: req.body.city
    })

    cityToAdd.save((err, response) => {
        if (err)
            res.send("Exception Occurred");
        else
            res.send({ status: 200, message: "City added successfully", restaurant: response });
    })
}


module.exports = { getCityList, addcity }