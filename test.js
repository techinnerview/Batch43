var os = require('os');
const fs = require('fs');

console.log(os.platform());
console.log(os.arch());

fs.writeFileSync("app.txt", "Welcome to Edureka !!")
console.log(fs.readFileSync("app.txt").toString());