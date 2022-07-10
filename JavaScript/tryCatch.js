try {
    var a = 10;
    var b = a / 2;
    if (isNaN(b))
        throw "Error occurred"
    if (b === 5)
        throw "I am not expecting value 5"
}
catch (error) {
    alert(error);
}
finally {
    alert("I will execute always")
}


// var arr = [1,2,3,4,5,6,7,8,9];

// arr.map((item) => {
//     document.write("<br />" + item)
// });

// var fileredArr = arr.filter((item) => {
//     return item > 96;
// })
// document.write("<br />" +fileredArr.length)
// fileredArr.map((item) => {
//     document.write("<br />" +item)
// });
