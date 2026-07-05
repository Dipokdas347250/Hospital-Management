const Prescription = require('../models/Prescription');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse, errorResponse } = require('../utils/apiResponse');

exports.getPrescriptions = asyncHandler(async (_req, res) => {
  const prescriptions = await Prescription.find().populate('patient').populate('doctor');
  return successResponse(res, 200, prescriptions, 'Prescriptions fetched');
});

exports.createPrescription = asyncHandler(async (req, res) => {
  const { patient, doctor, medicines, instructions, diagnosis } = req.body;

  if (!patient || !doctor) {
    return errorResponse(res, 400, 'Please provide patient and doctor');
  }

  const prescription = await Prescription.create({ patient, doctor, medicines, instructions, diagnosis });
  return successResponse(res, 201, prescription, 'Prescription created');
});

exports.getPrescription = asyncHandler(async (req, res) => {
  const prescription = await Prescription.findById(req.params.id).populate('patient').populate('doctor');
  if (!prescription) {
    return errorResponse(res, 404, 'Prescription not found');
  }
  return successResponse(res, 200, prescription, 'Prescription fetched');
});

exports.updatePrescription = asyncHandler(async (req, res) => {
  const prescription = await Prescription.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!prescription) {
    return errorResponse(res, 404, 'Prescription not found');
  }
  return successResponse(res, 200, prescription, 'Prescription updated');
});

exports.deletePrescription = asyncHandler(async (req, res) => {
  const prescription = await Prescription.findByIdAndDelete(req.params.id);
  if (!prescription) {
    return errorResponse(res, 404, 'Prescription not found');
  }
  return successResponse(res, 200, null, 'Prescription deleted');
});
