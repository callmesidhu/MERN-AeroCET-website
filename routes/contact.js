const express = require('express');
const path = require('path');
const router = express.Router();

// Route to trigger PDF download
router.get('/contact', async (req, res) => {
    const filePath = path.join(__dirname, '../public/contact/aerocet.pdf'); // Adjust path as needed
    console.log("Downloading PDF from:", filePath);

    res.download(filePath, 'aerocet.pdf', (err) => {
        if (err) {
            console.error("Error downloading file:", err);
            res.status(err.status || 500).send("Error downloading file.");
        }
    });
});

module.exports = router;
