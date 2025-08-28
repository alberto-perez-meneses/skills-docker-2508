const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.static('static'));
app.use(express.json());


app.get('/endpoint', async (req, res) => {
  console.log('API is working');
    res.status(200).json({ message: 'API is working' });
  
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});