const express = require('express');
const router = express.Router();
const { getDoctors, createDoctor, getDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctor.controller');
const protect = require('../middleware/auth.middleware');
const authorizeRoles = require('../middleware/role.middleware');

router.route('/').get(getDoctors).post(protect, authorizeRoles('admin'), createDoctor);
router.route('/:id').get(getDoctor).put(protect, authorizeRoles('admin', 'doctor'), updateDoctor).delete(protect, authorizeRoles('admin'), deleteDoctor);

module.exports = router;
