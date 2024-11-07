const { MongoClient, Binary } = require('mongodb');
const fs = require('fs');
const path = require('path'); 

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'aerocetdb';
const collectionName = 'aeroDownload';

async function insertPDF() {
  // Create a MongoDB client
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Read the PDF file as binary data
    const pdfData = fs.readFileSync(path.join(__dirname, '.././public/data/aerocet.pdf'));
    
    // Insert PDF as binary data
    const result = await collection.insertOne({
      filename: 'aerocet.pdf',
      data: new Binary(pdfData),
      uploadedAt: new Date()
    });

    console.log('PDF inserted with ID:', result.insertedId);
  } catch (error) {
    console.error('Error inserting PDF:', error);
  } finally {
    await client.close();
  }
}

insertPDF();
