const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      required: true
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true
    },
    medicines: {
      type: [String],
      default: []
    },
    instructions: {
      type: String,
      default: ''
    },
    diagnosis: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Prescription', prescriptionSchema);
