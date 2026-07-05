const Department = require('../models/Department');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse, errorResponse } = require('../utils/apiResponse');

exports.getDepartments = asyncHandler(async (_req, res) => {
  const departments = await Department.find().sort({ createdAt: -1 });
  return successResponse(res, 200, departments, 'Departments fetched');
});

exports.createDepartment = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return errorResponse(res, 400, 'Department name is required');
  }

  const department = await Department.create({ name, description });
  return successResponse(res, 201, department, 'Department created');
});

exports.getDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findById(req.params.id);
  if (!department) {
    return errorResponse(res, 404, 'Department not found');
  }
  return successResponse(res, 200, department, 'Department fetched');
});

exports.updateDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!department) {
    return errorResponse(res, 404, 'Department not found');
  }
  return successResponse(res, 200, department, 'Department updated');
});

exports.deleteDepartment = asyncHandler(async (req, res) => {
  const department = await Department.findByIdAndDelete(req.params.id);
  if (!department) {
    return errorResponse(res, 404, 'Department not found');
  }
  return successResponse(res, 200, null, 'Department deleted');
});
