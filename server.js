const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const pgApi = require('./lib/pg-api.js');
const mongoApi = require('./lib/mongo-api.js');

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello Worldzzzzz!')
});

app.get('/webhook', async (req, res) => {
  const stuff = await mongoApi.getData();
  res.send(stuff)
});

app.post('/webhook', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  console.log('got this stuff:');
  console.log();
  console.log(JSON.stringify(req.body));
  console.log();
  const resultId = await mongoApi.addData(req.body);

  console.log('got this result:');
  console.log();
  console.log(resultId);
  console.log();
  res.end(JSON.stringify(req.body))
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});