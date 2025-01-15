const express = require('express');
const router = express.Router();
const connectToDatabase = require('../config/dbconnection');

// Route to serve the PDF file
router.get('/data', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('aeroDownload');

        // Retrieve the document with the PDF file
        const file = await collection.findOne({ filename: 'aerocet.pdf' });

        if (!file) {
            return res.status(404).send('File not found');
        }

        // Check the field containing the binary data
        if (!file.data || !(file.data.buffer instanceof Buffer)) {
            return res.status(500).send('Invalid file data');
        }

        // Set the appropriate headers to indicate it's a PDF file
        res.setHeader('Content-Disposition', 'attachment; filename="aerocet.pdf"');
        res.setHeader('Content-Type', 'application/pdf');

        // Send the file data as the response
        res.send(file.data.buffer);
    } catch (err) {
        console.error("Error during file download:", err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
