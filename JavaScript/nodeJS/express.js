var express = require('express');
const app = express();
const port = 6500

app.listen(port,(err) => {
    if (err) {
        throw err;
    }
    document.write('server is rinning in port/:' + port);
});