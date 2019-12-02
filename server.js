const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});