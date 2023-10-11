const mongoose = require('mongoose');
require('dotenv').config();

// Get the MongoDB connection URI from environment variables
const uri = process.env.MONGODB_URI;

// Create a function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB...');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the application on connection error
    }
};

module.exports = connectDB;