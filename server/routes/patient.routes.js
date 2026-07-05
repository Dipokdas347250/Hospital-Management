const express = require('express');
const router = express.Router();
const { getPatients, createPatient, getPatient, updatePatient, deletePatient } = require('../controllers/patient.controller');
const protect = require('../middleware/auth.middleware');
const authorizeRoles = require('../middleware/role.middleware');

router.route('/').get(protect, authorizeRoles('admin'), getPatients).post(createPatient);
router.route('/:id').get(protect, authorizeRoles('admin', 'patient'), getPatient).put(protect, authorizeRoles('admin', 'patient'), updatePatient).delete(protect, authorizeRoles('admin'), deletePatient);

module.exports = router;
