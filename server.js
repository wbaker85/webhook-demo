const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Worldzzzzz!')
});

app.get('/webhook', (req, res) => {
  res.send('Got some stuff')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});