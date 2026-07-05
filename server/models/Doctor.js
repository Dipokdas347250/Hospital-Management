const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    specialization: {
      type: String,
      required: true,
      trim: true
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department'
    },
    experience: {
      type: Number,
      default: 0
    },
    bio: {
      type: String,
      default: ''
    },
    fees: {
      type: Number,
      default: 0
    },
    available: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);
