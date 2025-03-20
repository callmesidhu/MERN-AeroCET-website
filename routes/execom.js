const express = require('express');
const router = express.Router();

// Example Execome Route
router.get('/execom/2025', (req, res) => {
  res.json({ message: 'Execome API' });
});

module.exports = router;
