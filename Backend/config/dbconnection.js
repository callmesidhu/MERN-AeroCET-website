const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB_URI; 


const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully!");
        return client.db("aerocetdb");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}

module.exports = connectToDatabase;
