import 'mongodb';

let db = null;
let dbInitialized = false;
const DB_NAME = "Ara";
async function getClient() {
  {
    {
      throw new Error("MONGODB_URI environment variable is not set");
    }
  }
}
async function getDb() {
  if (!db) {
    const mongoClient = await getClient();
    db = mongoClient.db(DB_NAME);
    try {
      const adminDb = mongoClient.db("admin").admin();
      const databases = await adminDb.listDatabases();
      const dbExists = databases.databases.some((d) => d.name === DB_NAME);
      if (!dbExists) {
        const tempCollection = db.collection("_init");
        await tempCollection.insertOne({ _init: true, createdAt: /* @__PURE__ */ new Date() });
        await tempCollection.deleteOne({ _init: true });
        console.log(`✅ Database '${DB_NAME}' created`);
        dbInitialized = true;
      } else {
        console.log(`✅ Database '${DB_NAME}' already exists`);
        dbInitialized = false;
      }
    } catch (error) {
      console.log(`⚠️  Could not check database existence, creating '${DB_NAME}'...`);
      const tempCollection = db.collection("_init");
      await tempCollection.insertOne({ _init: true, createdAt: /* @__PURE__ */ new Date() });
      await tempCollection.deleteOne({ _init: true });
      console.log(`✅ Database '${DB_NAME}' created`);
      dbInitialized = true;
    }
    console.log(`📊 Database name: ${DB_NAME}`);
    console.log(`🔌 Connection status: ${"Disconnected"}`);
    console.log(`🆕 Database was created: ${dbInitialized ? "Yes" : "No (already existed)"}`);
  }
  return db;
}
async function getCollection(collectionName) {
  const database = await getDb();
  return database.collection(collectionName);
}
async function exists(collectionName, filter) {
  try {
    const collection = await getCollection(collectionName);
    const result = await collection.findOne(filter);
    return result !== null;
  } catch (error) {
    console.error("Error checking if document exists:", error);
    return false;
  }
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

export { create, exists, getCollection };
