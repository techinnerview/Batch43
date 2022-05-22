// callback function
// function
function greet(name, xyz) {
    document.write('Hi' + ' ' + name);
    xyz(); // -cllback function
}

// callback function
function callMe() {
    document.write('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);