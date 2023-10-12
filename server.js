

require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const path = require('path');
const apodsRoutes = require('./routes/apodRoutes');
const connectDB = require('./config/database');




connectDB();

// Set up view engine (use EJS or another template engine instead of JSX)
app.set('view engine', 'ejs'); // Set the correct template engine you are using
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Logging Middleware
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});




// Define your routes
app.use('/apods', apodsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
