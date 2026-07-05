const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    age: {
      type: Number,
      default: 0
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      default: 'other'
    },
    address: {
      type: String,
      default: ''
    },
    bloodGroup: {
      type: String,
      default: ''
    },
    medicalHistory: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);
