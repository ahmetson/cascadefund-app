import { MongoClient } from 'mongodb';

let client = null;
let db = null;
let isConnected = false;
const DB_NAME = "Ara";
async function getClient() {
  if (!client) {
    const uri = "mongodb://root:password@localhost:27017/Ara?authSource=admin";
    client = new MongoClient(uri);
    await client.connect();
    isConnected = true;
    return client;
  }
  return client;
}
async function getDb() {
  if (!db) {
    const mongoClient = await getClient();
    db = mongoClient.db(DB_NAME);
    console.log(`📊 Database name: ${DB_NAME}`);
    console.log(`🔌 Connection status: ${isConnected ? "Connected" : "Disconnected"}`);
  }
  return db;
}
async function getCollection(collectionName) {
  const database = await getDb();
  return database.collection(collectionName);
}
async function create(collectionName, document) {
  try {
    const collection = await getCollection(collectionName);
    await collection.insertOne(document);
    return true;
  } catch (error) {
    console.error("Error creating document:", error);
    return false;
  }
}

export { getDb as a, create as c, getCollection as g };
