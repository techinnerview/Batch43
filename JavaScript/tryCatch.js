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