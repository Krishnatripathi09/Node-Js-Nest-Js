const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://react001:ij3gIfWaMNhCQIcz@cluster0.bhawl.mongodb.net/";

const client = new MongoClient(uri);

const dbName = "FirstNodeDb";

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db(dbName).command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data = {
      firstName: "Beautiful Name",
      lastName: "Tripathi",
      city: "Pune",
      phoneNumber: "9876543211",
    };
    //Write;

    // const result = await collection.insertOne(data);
    // console.log("Inserted Data ===>", result);

    //Read
    const findResult = await collection.find({}).toArray();
    console.log("Found document =>", findResult);

    const countResult = await collection.countDocuments({});
    console.log("Count of Documents in the User Collection =>", countResult);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
