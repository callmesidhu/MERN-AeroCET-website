const { MongoClient, Binary } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Connection URI from environment variable for security
const uri = process.env.MONGODB_URI ;

// Database and collection names
const dbName = 'aerocetdb';
const collectionName = 'aeroDownload';

async function insertPDF() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,  // use new connection string parser
    useUnifiedTopology: true  // use new connection management engine
  });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Read the PDF file as binary data
    const pdfPath = path.join(__dirname, '../public/data/aerocet.pdf');
    const pdfData = fs.readFileSync(pdfPath);
    console.log('PDF file read from path:', pdfPath);

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

// Execute the function
insertPDF();
