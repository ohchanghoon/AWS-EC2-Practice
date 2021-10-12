const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('AWS TEST');
});

app.listen(port, () => {
  console.log('port number : ', port);
});

module.exports = app;
