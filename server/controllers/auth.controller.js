const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const fallbackUserStore = require('../utils/fallbackUserStore');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET || 'hospital-management-secret-key', { expiresIn: '7d' });
const normalizeEmail = (email = '') => email.trim().toLowerCase();

exports.register = asyncHandler(async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  if (!name || !email || !password) {
    return errorResponse(res, 400, 'Please provide name, email and password');
  }

  const normalizedEmail = normalizeEmail(email);
  const dbReady = mongoose.connection.readyState === 1;

  let existingUser = null;

  if (dbReady) {
    try {
      existingUser = await User.findOne({ email: normalizedEmail });
    } catch (error) {
      console.warn('Database lookup failed, using fallback store:', error.message);
    }
  }

  if (!existingUser) {
    existingUser = await fallbackUserStore.findUserByEmail(normalizedEmail);
  }

  if (existingUser) {
    return errorResponse(res, 400, 'User already exists');
  }

  let user;

  if (dbReady) {
    try {
      user = await User.create({ name, email: normalizedEmail, password, role, phone });
    } catch (error) {
      console.warn('Database create failed, using fallback store:', error.message);
      user = await fallbackUserStore.createUser({ name, email: normalizedEmail, password, role, phone });
    }
  } else {
    user = await fallbackUserStore.createUser({ name, email: normalizedEmail, password, role, phone });
  }

  if (!user) {
    return errorResponse(res, 400, 'User already exists');
  }

  const safeUser = dbReady ? user : fallbackUserStore.sanitizeUser(user);
  return successResponse(res, 201, { user: safeUser, token: generateToken(user._id) }, 'User registered successfully');
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return errorResponse(res, 400, 'Please provide email and password');
  }

  const normalizedEmail = normalizeEmail(email);
  const dbReady = mongoose.connection.readyState === 1;

  let user = null;

  if (dbReady) {
    try {
      user = await User.findOne({ email: normalizedEmail });
    } catch (error) {
      console.warn('Database lookup failed, using fallback store:', error.message);
    }
  }

  if (!user) {
    user = await fallbackUserStore.findUserByEmail(normalizedEmail);
  }

  if (!user) {
    return errorResponse(res, 404, 'User not found');
  }

  let isMatch = false;

  if (dbReady && typeof user.comparePassword === 'function') {
    isMatch = await user.comparePassword(password);
  } else {
    isMatch = await fallbackUserStore.comparePassword(user, password);
  }

  if (!isMatch) {
    return errorResponse(res, 401, 'Invalid credentials');
  }

  const safeUser = dbReady ? user : fallbackUserStore.sanitizeUser(user);
  return successResponse(res, 200, { user: safeUser, token: generateToken(user._id) }, 'Login successful');
});

exports.getMe = asyncHandler(async (req, res) => {
  return successResponse(res, 200, req.user, 'User profile fetched');
});
