const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.static('static'));
app.use(express.json());


app.get('/test', async (req, res) => {

  fetch('http://api:4000/endpoint')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});