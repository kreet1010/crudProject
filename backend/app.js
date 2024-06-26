const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
  }));

// Routes
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB
connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
