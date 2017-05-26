const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// serve static assets normally
app.use(express.static(__dirname + '/static'));

// Handles all routes so you do not get a not found error
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'static/index.html'));
});

app.listen(port);
console.log("server started on port " + port);
