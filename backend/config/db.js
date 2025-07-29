const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use hardcoded URI if environment variable is not available
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/unfiltered';
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; 