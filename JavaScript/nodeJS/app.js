var http = require('http');


// HTTP COde 200 == success
// HTTP CODE 500 == Failre

http.createServer(function (req, res) {
  res.writeHead(500, {'Content-Type': 'application/json'});
  res.write("Welcome to Edureka");
  res.end();
}).listen(6500);

// 1. get all employee details - GET - ulr is required
// 2. get one employee detiails - GET  ulr is required
// 3. Add one employee - POST - ulr is required + request body is also required
// 4. PUT - Update employee
// 5. DELETE - delete employee

// CRUD--HTTP METHOD

// 1. CREATE     - POST(DATA)   
// 2. READ       - GET(URL)
// 3. Update     - PUT(DATA)
// 4. DELETE     - DELETE(URL)