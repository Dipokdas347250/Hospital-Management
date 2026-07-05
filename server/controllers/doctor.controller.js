const Doctor = require('../models/Doctor');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse, errorResponse } = require('../utils/apiResponse');

exports.getDoctors = asyncHandler(async (_req, res) => {
  const doctors = await Doctor.find().populate('user', 'name email phone image').populate('department');
  return successResponse(res, 200, doctors, 'Doctors fetched');
});

exports.createDoctor = asyncHandler(async (req, res) => {
  const { name, email, password, specialization, department, experience, bio, fees } = req.body;

  if (!name || !email || !password || !specialization) {
    return errorResponse(res, 400, 'Please provide name, email, password and specialization');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return errorResponse(res, 400, 'User already exists');
  }

  const user = await User.create({ name, email, password, role: 'doctor' });
  const doctor = await Doctor.create({ user: user._id, specialization, department, experience, bio, fees });

  return successResponse(res, 201, doctor, 'Doctor created');
});

exports.getDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id).populate('user', 'name email phone image').populate('department');
  if (!doctor) {
    return errorResponse(res, 404, 'Doctor not found');
  }
  return successResponse(res, 200, doctor, 'Doctor fetched');
});

exports.updateDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!doctor) {
    return errorResponse(res, 404, 'Doctor not found');
  }
  return successResponse(res, 200, doctor, 'Doctor updated');
});

exports.deleteDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findByIdAndDelete(req.params.id);
  if (!doctor) {
    return errorResponse(res, 404, 'Doctor not found');
  }
  return successResponse(res, 200, null, 'Doctor deleted');
});
