const jwt = require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET || 'hospital-management-secret-key', { expiresIn: '7d' });

exports.register = asyncHandler(async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  if (!name || !email || !password) {
    return errorResponse(res, 400, 'Please provide name, email and password');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return errorResponse(res, 400, 'User already exists');
  }

  const user = await User.create({ name, email, password, role, phone });
  return successResponse(res, 201, { user, token: generateToken(user._id) }, 'User registered successfully');
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return errorResponse(res, 400, 'Please provide email and password');
  }

  const user = await User.findOne({ email });
  if (!user) {
    return errorResponse(res, 404, 'User not found');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return errorResponse(res, 401, 'Invalid credentials');
  }

  return successResponse(res, 200, { user, token: generateToken(user._id) }, 'Login successful');
});

exports.getMe = asyncHandler(async (req, res) => {
  return successResponse(res, 200, req.user, 'User profile fetched');
});
