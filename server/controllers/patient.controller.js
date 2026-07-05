const Patient = require('../models/Patient');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse, errorResponse } = require('../utils/apiResponse');

exports.getPatients = asyncHandler(async (_req, res) => {
  const patients = await Patient.find().populate('user', 'name email phone image');
  return successResponse(res, 200, patients, 'Patients fetched');
});

exports.createPatient = asyncHandler(async (req, res) => {
  const { name, email, password, age, gender, address, bloodGroup, medicalHistory } = req.body;

  if (!name || !email || !password) {
    return errorResponse(res, 400, 'Please provide name, email and password');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return errorResponse(res, 400, 'User already exists');
  }

  const user = await User.create({ name, email, password, role: 'patient' });
  const patient = await Patient.create({ user: user._id, age, gender, address, bloodGroup, medicalHistory });

  return successResponse(res, 201, patient, 'Patient created');
});

exports.getPatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id).populate('user', 'name email phone image');
  if (!patient) {
    return errorResponse(res, 404, 'Patient not found');
  }
  return successResponse(res, 200, patient, 'Patient fetched');
});

exports.updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!patient) {
    return errorResponse(res, 404, 'Patient not found');
  }
  return successResponse(res, 200, patient, 'Patient updated');
});

exports.deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);
  if (!patient) {
    return errorResponse(res, 404, 'Patient not found');
  }
  return successResponse(res, 200, null, 'Patient deleted');
});
