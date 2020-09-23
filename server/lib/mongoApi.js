const { MongoClient, ObjectId } = require('mongodb');

const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB_NAME;
const collectionName = process.env.MONGO_COLLECTION_NAME;

const establishCollection = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return collection;
};

module.exports = {
  async getAllDocuments() {
    const collection = await establishCollection();
    return collection.find({}).toArray();
  },

  async getOneDocumentById(id) {
    const collection = await establishCollection();
    return collection.find({"_id": new ObjectId(id)}).toArray();
  },

  // async getManyDocumentsByManyIds(idArray) {
  //   const collection = await establishCollection();
  //   const objIdArray = idArray.map(id => new ObjectId(id));
  //   return collection.find({$in: objIdArray}).toArray();
  // },

  async addOneDocument(dataJSON) {
    const collection = await establishCollection();
    const result = await collection.insertOne(dataJSON);
    return result.insertedId;
  },
};