const express = require('express');
const router = express.Router();

// Example Announcement Route
router.get('/announcements', (req, res) => {
  res.json({ message: 'Announcements API' });
});

module.exports = router;
