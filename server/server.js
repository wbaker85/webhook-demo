const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

const pgApi = require('./lib/pgApi.js');
const mongoApi = require('./lib/mongoApi.js');

app.use(bodyParser.json())

// route to the base page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

// get a list of all endpoints
app.get('/endpoints', async (req, res) => {
  const result = await pgApi.getEndpoints();
  res.json(result)
});

// create a new endpoint
app.post('/endpoints', async (req, res) => {
  const result = await pgApi.createEndpoint(req.body.name, req.body.path);
  res.json(result)
});

// get all the document ids for an endpoint
app.get('/endpoints/:endpointPath', async (req, res) => {
  const result = await pgApi.getDocIDsByEndpoint(req.params.endpointPath);
  res.json(result)
});

// post a new event to an endpoint
app.post('/endpoints/:endpointPath', async (req, res) => {
  const resultId = await mongoApi.addOneDocument(req.body);
  const result = await pgApi.addEvent(req.params.endpointPath, resultId);
  res.json(result)
});

// get the info for a single event
app.get('/endpoints/:endpointPath/:docId', async (req, res) => {
  const result = await mongoApi.getOneDocumentById(req.params.docId);
  res.json(result)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});