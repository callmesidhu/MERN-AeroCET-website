require('dotenv').config();
const { MongoClient, Binary } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Connection URI
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('Error: MONGODB_URI is undefined. Set it in your .env file.');
  process.exit(1);
}

// Database and collection names
const dbName = 'aerocetdb';
const collectionName = 'aeroDownload';

async function clearAndInsertPDF() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Clear the collection
    const deleteResult = await collection.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} documents from the collection.`);

    // Read the PDF file as binary data
    const pdfPath = path.join(__dirname, '../public/data/aerocet.pdf');
    const pdfData = fs.readFileSync(pdfPath);
    console.log('PDF file read from path:', pdfPath);

    // Insert the new PDF
    const result = await collection.insertOne({
      filename: 'aerocet.pdf',
      data: new Binary(pdfData),
      uploadedAt: new Date(),
    });

    console.log('New PDF inserted with ID:', result.insertedId);
  } catch (error) {
    console.error('Error clearing data or inserting PDF:', error);
  } finally {
    await client.close();
  }
}

// Execute the function
clearAndInsertPDF();
