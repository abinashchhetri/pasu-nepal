import { MongoClient, Db } from "mongodb";

const uri = process.env.NEXT_DB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not set");
}

const client = new MongoClient(uri);
let cachedDb: Db | null = null;

async function connect(): Promise<Db> {
  // If we already have a cached database instance, return it
  if (cachedDb) {
    return cachedDb;
  }

  // Connect to MongoDB (safe to call multiple times - driver handles it efficiently)
  // If already connected, this will just resolve immediately without creating a new connection
  await client.connect();

  // Cache the database instance for future use
  cachedDb = client.db("pawshu-nepal");
  return cachedDb;
}

export { connect };
