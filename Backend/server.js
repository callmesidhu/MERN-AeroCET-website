const express = require('express');
const dotenv = require('dotenv');
const driveRoutes = require('./routes/driveData'); 
const dbRoutes = require('./routes/dbData'); 

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use('/db', dbRoutes);  
app.use('/drive', driveRoutes);  


app.get('/', (req, res) => {
  res.send('AeroCET Backend');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
