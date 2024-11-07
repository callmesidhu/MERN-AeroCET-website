const express = require('express');
const router = express.Router();    
        
router.get('/data', (req, res) => {
        res.send('db data');
      });

module.exports = router;