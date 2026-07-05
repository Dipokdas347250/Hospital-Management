const Appointment = require('../models/Appointment');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse, errorResponse } = require('../utils/apiResponse');

exports.getAppointments = asyncHandler(async (_req, res) => {
  const appointments = await Appointment.find().populate('patient').populate('doctor');
  return successResponse(res, 200, appointments, 'Appointments fetched');
});

exports.createAppointment = asyncHandler(async (req, res) => {
  const { patient, doctor, appointmentDate, notes } = req.body;

  if (!patient || !doctor || !appointmentDate) {
    return errorResponse(res, 400, 'Please provide patient, doctor and appointment date');
  }

  const appointment = await Appointment.create({ patient, doctor, appointmentDate, notes });
  return successResponse(res, 201, appointment, 'Appointment created');
});

exports.getAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id).populate('patient').populate('doctor');
  if (!appointment) {
    return errorResponse(res, 404, 'Appointment not found');
  }
  return successResponse(res, 200, appointment, 'Appointment fetched');
});

exports.updateAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!appointment) {
    return errorResponse(res, 404, 'Appointment not found');
  }
  return successResponse(res, 200, appointment, 'Appointment updated');
});

exports.deleteAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  if (!appointment) {
    return errorResponse(res, 404, 'Appointment not found');
  }
  return successResponse(res, 200, null, 'Appointment deleted');
});
