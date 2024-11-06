const express = require('express');
const Document = require('../models/Document');  // Import the Document model

const router = express.Router();

// GET route to fetch the PDF from MongoDB
router.get('/pdf/:id', async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);  // Find the document by its ID

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Set the content type and send the PDF buffer as a response
    res.setHeader('Content-Type', document.contentType);
    res.send(document.file);  // Send the file buffer as response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching PDF', error: err });
  }
});

module.exports = router;
