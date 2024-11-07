const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/data', (req, res) => {
    res.download(path.join(__dirname, '.././public/data/aerocet.pdf'));
});

module.exports = router;
