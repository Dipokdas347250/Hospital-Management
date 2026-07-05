const express = require('express');
const router = express.Router();
const { getAppointments, createAppointment, getAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointment.controller');
const protect = require('../middleware/auth.middleware');
const authorizeRoles = require('../middleware/role.middleware');

router.route('/').get(protect, authorizeRoles('admin', 'doctor', 'patient'), getAppointments).post(protect, authorizeRoles('admin', 'patient'), createAppointment);
router.route('/:id').get(protect, authorizeRoles('admin', 'doctor', 'patient'), getAppointment).put(protect, authorizeRoles('admin', 'doctor'), updateAppointment).delete(protect, authorizeRoles('admin'), deleteAppointment);

module.exports = router;
