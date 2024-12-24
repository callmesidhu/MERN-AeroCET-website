const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const apiRoutes = require('./routes/apiData'); 
const dbRoutes = require('./routes/dbData'); 


dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use('/db', dbRoutes);  
app.use('/api', apiRoutes);
app.get('/', (req, res) => {
  res.send('AeroCET Backend');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
