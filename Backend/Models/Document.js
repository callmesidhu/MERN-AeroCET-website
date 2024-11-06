// models/Document.js
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  file: {
    type: Buffer,  // Storing the file as binary data
    required: true
  },
  contentType: {
    type: String,  // Store the content type 
    required: true
  }
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
