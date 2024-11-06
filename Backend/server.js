const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Body parser middleware to parse JSON requests
app.use(bodyParser.json());

// Import the router
const atlasRouter = require('../routes/AtlasData');
app.use('/', atlasRouter);  // Use the router for all requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Atlas is connected..!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
