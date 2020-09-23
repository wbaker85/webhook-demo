const { MongoClient } = require('mongodb');
const assert = require('assert');

const url = 'mongodb://mongo:27017';
const dbName = 'myproject';
const collectionName = 'collection'

const getData = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return collection.find({}).toArray();
};

const addData = async (dataJSON) => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(dataJSON);
  return result.insertedId;
};

module.exports = {
  getData,
  addData,
};