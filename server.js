const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const galleryRoutes = require('./routes/gallery'); 
const contactRoutes = require('./routes/contact');  
const achievementsRoutes = require('./routes/achievements');  
const announcementsRoutes = require('./routes/announcements');  
const execomRoutes = require('./routes/execom');  

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

// API Routes
app.use('/api', contactRoutes);
app.use('/api', galleryRoutes);
app.use('/api', achievementsRoutes);
app.use('/api', announcementsRoutes);
app.use('/api', execomRoutes);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>AeroCET Backend</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color:rgb(255, 123, 0);
            font-family: Arial, sans-serif;
          }
          h1 {
            font-size: 5rem;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h1>AeroCET Backend</h1>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
