const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes'); 
const errorMiddleware = require('./middlewares/errorMiddleware');
const { connectDB } = require('./config/database');

const app = express();

// Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes 
app.use('./api', apiRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Database connection 
connectDB();

module.exports = app; 
