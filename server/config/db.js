const mongoose = require('mongoose');

mongoose.set('bufferCommands', false);

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb+srv://Hospital-Management:Hospital-Management@cluster0.rxxqozs.mongodb.net/Hospital-Management?appName=Cluster0';

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 10000,
      family: 4
    });

    console.log('MongoDB connected');
    return true;
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    console.warn('Auth endpoints will fall back to in-memory storage.');
    return false;
  }
};

module.exports = connectDB;
