var express = require('express');
var router = express.Router();
var { getRestaurants, addRestaurant } = require('../controller/restaurantController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    getRestaurants(req, res, next);
});

router.get('/getRestaurants', function (req, res, next) {
    getRestaurants(req, res, next);
});

router.get('/getRestaurantByName', function (req, res, next) {
    getRestaurantByName(req, res, next);
});

router.get('/getRestaurantById/:id', function (req, res, next) {
    getRestaurantById(req, res, next);
});

router.post('/addRestaurant', function (req, res, next) {
    addRestaurant(req, res, next);
});

router.put('/updateRestaurant', function (req, res, next) {
    updateRestaurant(req, res, next);
});

router.delete('/deleteRestaurantByName', function (req, res, next) {
    deleteRestaurantByName(req, res, next);
});
module.exports = router;
