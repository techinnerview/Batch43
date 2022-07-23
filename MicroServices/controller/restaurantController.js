var restaurantSchema = require("../model/restaurantModel");

getRestaurants = (req, res, next) => {
    restaurantSchema.find((err, response) => {
        if (err)
            res.send("Exception Occured")
        else
            res.send(response);
    })
}

getRestaurantByName = (req, res, next) => {
    restaurantSchema.find({ "city": req.query.name }, (err, response) => {
        if (err)
            res.send("Exception Occured")
        else
            res.send(response);
    })
}

getRestaurantById = (req, res, next) => {
    restaurantSchema.findById(req.params.id, (err, response) => {
        if (err)
            res.send("Exception Occured")
        else
            res.send(response);
    })
}

addRestaurant = (req, res, next) => {
    var restautantsToAdd = new restaurantSchema({
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        location: req.body.location,
        image: req.body.image,
        cuisine: req.body.cuisine,
        min_price: req.body.min_price,
        contact: req.body.contact,
        locality: req.body.locality,
        city: req.body.city,
    })

    restautantsToAdd.save((err, response) => {
        if (err)
            res.send("Exception Occurred");
        else
            res.send({ status: 200, message: "Restaurant added successfully", restaurant: response });
    })
}

updateRestaurant = (req, res, next) => {
    restaurantSchema.updateMany({ "name": req.query.name }, { "address": req.body.address }, (err, reponse) => {
        if(err)
            res.send("Exception Occurred")
        else
            res.send({ status: 200, message: "Restaurant Updated Successfully"});
    })
}

deleteRestaurantByName = (req, res, next) => {
    restaurantSchema.remove({ "name": req.query.name }, (err, reponse) => {
        if(err)
            res.send("Exception Occurred")
        else
            res.send({ status: 200, message: "Restaurant Deleted Successfully"});
    })
}

module.exports = { getRestaurants, addRestaurant }