let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("Hello Everyone");
    } else {
        myReject("Error");
    }
});

// chaining
myPromise.then(
    function (value) { document.write(value); },
    function (error) { document.write(error); }
);


let myChainingPromise = new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 3000); // (*)

}).then(function (result) { // (**)

    alert(result); // 1
    return "hello"; //2

}).then(function (result) { // (***)

    alert(result); // 2
    return "hei"; //4

}).then(function (result) {

    alert(result); // 4
    return null; // 8

});


//Promise API
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
        
    ));

// callback function
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    document.write('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);


restaurantList = [ {
    "name": "abc",
    "address": "xyz",
    "city": "wer"
},
{
    "name": "abc",
    "address": "xyz",
    "city": "wer"
},
{
    "name": "abc",
    "address": "xyz",
    "city": "wer"
},
{
    "name": "abc",
    "address": "xyz",
    "city": "wer"
}]
function printAllRestaurantNames(){
    restaurantList.map((item) => {
        document.write(item.name);
    })
}
function filterRestaurantByCity(cityName){
    restaurantList.filter((item) => {
        return item.city === cityName;
    })
}