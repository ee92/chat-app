const path = require('path');
const express = require('express')

var app = express();
const pubpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(pubpath));

app.listen(port, () => {
  console.log('server up on port ' + port);
});
