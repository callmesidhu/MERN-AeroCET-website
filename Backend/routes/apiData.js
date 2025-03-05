const express = require('express');
const cloudinary = require('../config/apiconnection'); 

const router = express.Router();

router.get('/data', async (req, res) => {
  try {
    // Use the Cloudinary API to fetch resources
    const result = await cloudinary.api.resources({
      type: 'upload', // Only include uploaded resources
      prefix: '',     // Optional: Add folder name if images are stored in a specific folder
      max_results: 50 // Optional: Limit the number of results
    });

    // Extract the URLs of the images
    const images = result.resources.map((resource) => resource.secure_url);

    res.json({ images }); // Send the image URLs as JSON
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

module.exports = router;
