const mongoose = require('mongoose');

// MongoDB connection string
const mongoURI = 'mongodb://127.0.0.1:27017/unfiltered';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully!');
    console.log('Connection details:', mongoose.connection);
    // Close the connection after successful test
    mongoose.connection.close();
    console.log('Connection closed');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  }); 