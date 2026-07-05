const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Hospital-Management:Hospital-Management@cluster0.rxxqozs.mongodb.net/Hospital-Management?appName=Cluster0');
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
