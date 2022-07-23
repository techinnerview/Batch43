var mealsSchema = require("../model/mealsModel")

getMeals = (req, res, next) => {
    mealsSchema.find((err, response) => {
        console.log(response)
        if (err)
            res.send("Exception Occured")
        else
            res.send(response);
    })
}

addMeals = (req, res, next) => {
    var cityToAdd = new mealsSchema({
        meal_type: req.body.meal_type,
        image: req.body.image,
        name: req.body.name,
        content: req.body.content
    })

    cityToAdd.save((err, response) => {
        if (err)
            res.send("Exception Occurred");
        else
            res.send({ status: 200, message: "Meal added successfully", restaurant: response });
    })
}


module.exports = { getMeals, addMeals }