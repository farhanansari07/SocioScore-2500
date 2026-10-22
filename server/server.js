const dns = require('node:dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'SocioScore 2500 API is running',
    database: 'Check /api/db-health',
  });
});

app.get('/api/db-health', (req, res) => {
  const mongoose = require('mongoose');
  const connected = mongoose.connection.readyState === 1;

  res.status(connected ? 200 : 503).json({
    success: connected,
    database: connected ? 'Connected' : 'Not connected',
  });
});

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`SocioScore API running at http://localhost:${PORT}`);
    });
  } catch {
    console.error('Server startup stopped because the database connection failed.');
  }
}

startServer();
