const { MongoClient } = require('mongodb');

// MongoDB URI for your local MongoDB setup (no need for cluster name in local connection)
const uri = "mongodb://localhost:27017"; // Connecting to localhost and the database will be selected later

async function main() {
  const client = new MongoClient(uri);
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB");

    // Use the NagpurDial1 database and the Restaurants collection
    const database = client.db("NagpurDial1"); // Adjusted to use the correct database
    const collection = database.collection("Resturants"); // This is where you are inserting your data

    // Define the restaurant data to insert
    const restaurantData = [
      {
        id: 1,
        name: "Angel's N Devil's Restro",
        address: {
          street: "Hingna T Point Road, beside FDCM Office, Trimurtee Nagar, Nagpur, Maharashtra 440022",
          city: "Nagpur"
        },
        phone_numbers: [
          { number: "+918856089554" }
        ],
        image_urls: [ 
          "\\public\\images\\Restaurants\\Angel's N Devil's Restro-1.jpg", // Make sure this path is correct
          "\\public\\images\\Restaurants\\Angel's N Devil's Restro-2.jpg" // Same as above
        ]
      }
    ];

    // Insert restaurant data into the collection
    const result = await collection.insertMany(restaurantData);
    console.log(`Inserted ${result.insertedCount} documents`);

  } catch (err) {
    console.error("Error occurred:", err);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

main().catch(console.error);
