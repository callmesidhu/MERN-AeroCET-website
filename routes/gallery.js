// routes/apiData.js
const express = require('express');
const router = express.Router();
const cloudinary = require('../config/apiconnection');

router.get('/gallery', async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: '',  // Adjust the prefix as needed
      max_results: 50
    });

    console.log('Cloudinary Response:', result);

    const images = result.resources.map((resource) => resource.secure_url);
    res.json({ images });
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images', details: error.message });
  }
});

module.exports = router;
