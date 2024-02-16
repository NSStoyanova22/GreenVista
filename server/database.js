const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    return client.db();
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

module.exports = { connect };
