const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.static('static'));
app.use(express.json());

const dbHost = process.env.DB_HOST;
const state = { counter: 0 };
app.get('/config', async (req, res) => {

    res.status(200).json({ message: `Database Host: ${dbHost}` });

});

app.get('/healthcheck', async (req, res) => {

   state.counter++;

    console.log(`Healthcheck called ${state.counter} times`);

  res.status(200).json({ status: 'ok' });

});

app.get('/endpoint', async (req, res) => {
  console.log('API is working');
    res.status(200).json({ message: 'API is working' });
  
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});