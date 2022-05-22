async function myFunction() {
    return "Hello";
}

myFunction().then(
    function (value) { document.write(value); }
);

// Await
async function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("Welcome to Edureka !!");
    });
    document.write(await myPromise);
}

myDisplay();


// timeout
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Welcome to Edureka !!");}, 3000);
    });
    document.write(await myPromise);
  }
  
  myDisplay();